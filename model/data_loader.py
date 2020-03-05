import torch
from torch.nn.utils.rnn import pad_sequence
import os
import numpy as np
import pickle as pkl


def load_data(args):
    if args.model in ['lr', 'mlp']:
        dataset = 'group'
    elif args.model in ['cnn', 'rnn']:
        dataset = 'split'
    names = ['x', 'y']
    objects = []
    for i in range(len(names)):
        with open(os.path.join("../data/{}_{}.pkl".format(names[i], dataset)), 'rb') as f:
            objects.append(pkl.load(f))
    x, y = tuple(objects)

    all_idx = np.arange(len(y))
    np.random.shuffle(all_idx)
    all_idx = all_idx.tolist()
    nb_val = round(0.10 * len(all_idx))
    nb_test = round(0.20 * len(all_idx))
    idx_val, idx_test, idx_train = all_idx[:nb_val], all_idx[nb_val: nb_val + nb_test], all_idx[nb_val + nb_test:]

    if dataset == 'split':
        x = pad_sequence([torch.FloatTensor(i) for i in x], batch_first=True)
    else:
        x = torch.FloatTensor(x)
    y = torch.LongTensor(y)

    data = {'x': x, 'y': y, 'idx_train': idx_train, 'idx_val': idx_val, 'idx_test': idx_test}
    return data
