import torch
from torch import nn
import torch.nn.functional as F
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score


def acc_f1(output, labels, average='binary'):
    output = torch.sigmoid(output)
    if output.is_cuda:
        output = output.detach().cpu()
        labels = labels.detach().cpu()
    output = (output > 0.5).long()
    labels = labels.long()
    accuracy = accuracy_score(labels, output)
    precision = precision_score(labels, output, average=average)
    recall = recall_score(labels, output, average=average)
    f1 = f1_score(labels, output, average=average)
    return accuracy, precision, recall, f1


class BaseModel(nn.Module):
    # Base Model for KG Embedding Task

    def __init__(self, args):
        super(BaseModel, self).__init__()
        self.n_classes = args.n_classes
        self.f_dim = args.f_dim
        self.n_dim = args.dim
        self.layer = None
        self.weights = self.get_weights(args.data['y'])
        if not args.cuda == -1:
            self.weights = self.weights.to(args.device)

    def get_weights(self, data):
        pos = (data.long() == 1).float()
        neg = (data.long() == 0).float()
        num_pos = torch.sum(data.long() == 1).float()
        num_neg = torch.sum(data.long() == 0).float()
        num_total = num_pos + num_neg
        alpha_pos = num_neg / num_total
        alpha_neg = num_pos / num_total
        alpha_pos = torch.Tensor([alpha_pos] * data.shape[0])
        alpha_neg = torch.Tensor([alpha_neg] * data.shape[0])
        return alpha_pos * pos + alpha_neg * neg

    def forward(self, x):
        output = self.layer.forward(x)
        return output

    def get_loss(self, outputs, data, split):
        idx = data[f'idx_{split}']
        outputs = outputs[idx].view(-1)
        labels = data['y'][idx]
        loss = F.binary_cross_entropy_with_logits(outputs, labels.float(), self.weights[idx])
        return loss

    def compute_metrics(self, outputs, data, split):
        idx = data[f'idx_{split}']
        outputs = outputs[idx]
        labels = data['y'][idx]
        acc, pre, rec, f1 = acc_f1(outputs, labels)
        metrics = {'acc': acc, 'pre': pre, 'rec': rec, 'f1': f1}
        return metrics

    def has_improved(self, m1, m2):
        return m1['acc'] < m2['acc']

    def init_metric_dict(self):
        return {'acc': -1, 'pre': -1, 'rec': -1, 'f1': -1}


class LogisticRegression(BaseModel):
    # Logistic Regression Model

    def __init__(self, args):
        super(LogisticRegression, self).__init__(args)
        self.layer = nn.Linear(self.f_dim, self.n_classes, True)


class Multilayer(BaseModel):
    # Multilayer Model

    def __init__(self, args):
        super(Multilayer, self).__init__(args)
        layers = []
        layers.append(nn.Linear(self.f_dim, self.n_dim, True))
        layers.append(nn.ReLU())
        layers.append(nn.Linear(self.n_dim, self.n_dim, True))
        layers.append(nn.ReLU())
        layers.append(nn.Linear(self.n_dim, self.n_classes, True))
        self.layer = nn.Sequential(*layers)


class TextCNN(BaseModel):
    # Text CNN Model

    def __init__(self, args):
        super(TextCNN, self).__init__(args)
        self.conv3 = nn.Conv2d(1, 50, (3, self.f_dim))
        self.conv4 = nn.Conv2d(1, 50, (4, self.f_dim))
        self.conv5 = nn.Conv2d(1, 50, (5, self.f_dim))
        self.fc = nn.Linear(3*50, self.n_classes, True)

    def forward(self, x):
        x = x.view(x.shape[0], 1, x.shape[1], -1)
        batch = x.shape[0]
        # Convolution
        x1 = F.relu(self.conv3(x))
        x2 = F.relu(self.conv4(x))
        x3 = F.relu(self.conv5(x))
        # Pooling
        x1 = x1.view(batch, 50, -1)
        x2 = x2.view(batch, 50, -1)
        x3 = x3.view(batch, 50, -1)
        x1 = F.max_pool1d(x1, x1.size(2)).squeeze(2)
        x2 = F.max_pool1d(x2, x2.size(2)).squeeze(2)
        x3 = F.max_pool1d(x3, x3.size(2)).squeeze(2)
        # capture and concatenate the features
        x = torch.cat((x1, x2, x3), -1)
        # project the features to the labels
        out = self.fc(x)
        return out


class BidirectionalGRU(BaseModel):
    # Bidirectional GRU Model

    def __init__(self, args):
        super(BidirectionalGRU, self).__init__(args)
        self.hidden_size = self.n_dim
        self.num_layers = 2
        self.bigru = nn.GRU(self.f_dim, self.hidden_size, self.num_layers, batch_first=True, bidirectional=True)
        self.fc = nn.Linear(self.hidden_size * 2, self.n_classes, True)
        self.dropout = nn.Dropout(args.dropout)

    def forward(self, x):
        # Forward propagate LSTM
        gru_out, _ = self.bigru(x)
        gru_out = torch.transpose(gru_out, 0, 1)
        gru_out = torch.transpose(gru_out, 1, 2)
        # Decode the hidden state of the last time step
        gru_out = F.max_pool1d(gru_out, gru_out.size(2)).squeeze(2)
        gru_out = F.tanh(gru_out)
        out = self.fc(gru_out)
        return out


