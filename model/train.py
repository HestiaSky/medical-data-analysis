from data_loader import load_data
from config import parser
import torch
import time
import numpy as np
from model import LogisticRegression, Multilayer, TextCNN, BidirectionalGRU


def format_metrics(metrics, split):
    return " ".join(
        ["{}_{}: {:.4f}".format(split, metric_name, metric_val) for metric_name, metric_val in metrics.items()])


def train(args):
    np.random.seed(args.seed)
    torch.manual_seed(args.seed)
    args.device = 'cuda:' + str(args.cuda) if int(args.cuda) >= 0 else 'cpu'
    print(f'Using: {args.device}')
    print(f'Using seed: {args.seed}')

    # Load Data
    data = load_data(args)
    args.data = data
    if args.model == 'lr':
        Model = LogisticRegression
    elif args.model == 'mlp':
        Model = Multilayer
    elif args.model == 'cnn':
        Model = TextCNN
    elif args.model == 'rnn':
        Model = BidirectionalGRU
    args.n_classes = 1
    args.f_dim = 14
    print(f'Num Labels: {args.n_classes}')

    # Model and Optimizer
    model = Model(args)
    print(str(model))
    optimizer = torch.optim.Adam(params=model.parameters(),
                                 lr=args.lr, weight_decay=args.weight_decay)
    tot_params = sum([np.prod(p.size()) for p in model.parameters()])
    print(f'Total number of parameters: {tot_params}')
    if args.cuda is not None and int(args.cuda) >= 0:
        model = model.to(args.device)
        for x, val in data.items():
            if torch.is_tensor(data[x]):
                data[x] = data[x].to(args.device)

    # Train Model
    t_total = time.time()
    counter = 0
    best_val_metrics = model.init_metric_dict()
    best_test_metrics = None

    for epoch in range(args.epochs):
        t = time.time()
        model.train()
        optimizer.zero_grad()
        outputs = model.forward(data['x'])
        loss = model.get_loss(outputs, data, 'train')
        loss.backward()
        optimizer.step()
        if (epoch + 1) % args.log_freq == 0:
            train_metrics = model.compute_metrics(outputs, data, 'train')
            print(' '.join(['Epoch: {:04d}'.format(epoch + 1),
                            format_metrics(train_metrics, 'train'),
                            'time: {:.4f}s'.format(time.time() - t)]))
        if (epoch + 1) % args.eval_freq == 0:
            model.eval()
            outputs = model.forward(data['x'])
            val_metrics = model.compute_metrics(outputs, data, 'val')
            print(' '.join(['Epoch: {:04d}'.format(epoch + 1),
                            format_metrics(val_metrics, 'val')]))
            if model.has_improved(best_val_metrics, val_metrics):
                best_test_metrics = model.compute_metrics(outputs, data, 'test')
                best_val_metrics = val_metrics
                counter = 0
            else:
                counter += 1
                if counter == args.patience:
                    print("Early stopping")
                    break

    print('Optimization Finished!')
    print('Total time elapsed: {:.4f}s'.format(time.time() - t_total))
    print(' '.join(['Val set results:',
                    format_metrics(best_val_metrics, 'val')]))
    print(' '.join(['Test set results:',
                    format_metrics(best_test_metrics, 'test')]))


if __name__ == '__main__':
    args = parser.parse_args()
    train(args)
