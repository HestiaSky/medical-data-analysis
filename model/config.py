import argparse


config_args = {
    'lr': 0.001,
    'cuda': -1,
    'epochs': 1000,
    'seed': 10086,
    'model': 'cnn',
    'dim': 50,
    'patience': 20,
    'log-freq': 1,
    'eval-freq': 1,
    'bias': 1,
    'weight-decay': 0.0,
    'dropout': 0.0
}

parser = argparse.ArgumentParser()
for param, val in config_args.items():
    parser.add_argument(f"--{param}", action="append", default=val)
