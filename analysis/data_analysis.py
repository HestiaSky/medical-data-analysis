import pandas as pd
import numpy as np


# Groupby case_ID(patient)
'''
df = pd.read_csv('../data/data_filtered.csv')
df = df.groupby(df['case_ID'], as_index=False).agg(lambda x: list(x))
print(df.head)
df.to_pickle('../data/data_group.pkl')
'''

# Calculate data for each case
'''
df = pd.read_pickle('../data/data_group.pkl')
derive = {}
cs = df.columns.tolist()[2:]
for c in cs:
    derive[c] = []
for index, row in df.iterrows():
    for c in cs:
        derive[c].append(round(np.max(row[c])))

df = df[['case_ID']]
for k, v in derive.items():
    df[k] = v

df.to_csv('../data/data_derived.csv', index=False)
'''

# Binary threshold
'''
df = pd.read_csv('../data/data_derived.csv')
print(df.head)
print(df.describe().index)
threshold = df.describe().iloc[6].tolist()[:-1]
print(threshold)
columns = df.columns.tolist()[1:-1]
assert len(columns) == len(threshold)
binary = {}
for c in columns:
    binary[c] = []
for index, row in df.iterrows():
    for i in range(len(columns)):
        tmp = row[columns[i]]
        if tmp <= threshold[i]:
            binary[columns[i]].append(0)
        else:
            binary[columns[i]].append(1)

binary_df = pd.DataFrame({'case_ID': df['case_ID'].tolist(), 'label': df['label'].tolist()})
for k, v in binary.items():
    binary_df[k] = v
print(binary_df.head)
binary_df.to_csv('../data/data_binary.csv', index=False)
'''
