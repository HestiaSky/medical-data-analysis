import numpy as np
import pandas as pd
import pickle
from sklearn.preprocessing import scale, MinMaxScaler


'''
df = pd.read_csv('../data/data_filtered.csv')
print(df.head)

p = ['妊娠图收缩压_pv1', '妊娠图舒张压_pv1', '妊娠图尿蛋白_pv2', '妊娠图水肿_pv2',
     '妊娠图体重_pv1', '妊娠图腹围_pv1', '妊娠图头盆关系_pv2',
     '血常规_红细胞', '血常规_单核细胞百分比', '血常规_嗜碱细胞绝对值',
     '血常规_淋巴细胞绝对值', '血常规_大血小板比率', '血常规_平均RBC血红蛋白量', '血常规_平均RBC体积']

df = df[['case_ID'] + p + ['label']]
for c in p:
    df[c] = MinMaxScaler().fit_transform(df[[c]])
print(df.head)

x = []
px = []
y = []
last = -1
label = 0
for index, row in df.iterrows():
    if index % 1000 == 0:
        print(index)
    rx = []
    for c in p:
        rx.append(row[c])
    label = row['label']
    if row['case_ID'] == last:
        px.append(rx)
    else:
        if index != 0:
            x.append(px)
            y.append(label)
        px = [rx]
        last = row['case_ID']

x.append(px)
y.append(label)

pickle.dump(x, open('../data/x_split.pkl', 'wb'))
pickle.dump(y, open('../data/y_split.pkl', 'wb'))
'''

'''
df = pd.read_csv('../data/data_derived.csv')
print(df.head)

p = ['妊娠图收缩压_pv1', '妊娠图舒张压_pv1', '妊娠图尿蛋白_pv2', '妊娠图水肿_pv2',
     '妊娠图体重_pv1', '妊娠图腹围_pv1', '妊娠图头盆关系_pv2',
     '血常规_红细胞', '血常规_单核细胞百分比', '血常规_嗜碱细胞绝对值',
     '血常规_淋巴细胞绝对值', '血常规_大血小板比率', '血常规_平均RBC血红蛋白量', '血常规_平均RBC体积']

df = df[['case_ID'] + p + ['label']]
for c in p:
    df[c] = MinMaxScaler().fit_transform(df[[c]])
print(df.head)

x = df[p].values.tolist()
y = df['label'].tolist()

pickle.dump(x, open('../data/x_group.pkl', 'wb'))
pickle.dump(y, open('../data/y_group.pkl', 'wb'))
'''

