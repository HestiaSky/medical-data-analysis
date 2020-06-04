import pandas as pd
import numpy as np


# Filter NaN

df = pd.read_csv('../data/data.csv')
print(df.head)

columns = df.columns.tolist()
new_columns = []
for i in columns:
    if 'isNan' not in i:
        new_columns.append(i)
print(new_columns)
df = df[new_columns]
print(df.dtypes)

df = df.applymap(lambda x: np.nan if isinstance(x, (int, float)) and x < 0 else x)
print(df.head)
print(df.isnull().sum())

# Delete columns with most NaN data
e = []
for c in new_columns:
    if df[c].isnull().sum() < 0.98*df.shape[0]:
        e.append(c)
print(len(e))
df = df[e]

# Delete all same value columns
e = []
for c in df.columns.tolist():
    if df[c].max() != df[c].min():
        e.append(c)
df = df[e]

df = df.sort_values(by=['case_ID', 'week'], ascending=[True, True]).reset_index()
print(df.head)
# df.to_csv('../data/data_filtered.csv')


# Regularization

df = pd.read_csv('../data/data_filtered.csv')
print(df.head)
from sklearn.preprocessing import scale, MinMaxScaler

columns = df.columns.tolist()
for c in columns[2:11]:
    df[c] = scale(df[c])
for c in columns[11:-1]:
    df[c] = MinMaxScaler().fit_transform(df[[c]])
print(df.head)

# df.to_csv('../data/data_regualr.csv', index=False)


# Fill NaN with 0.0 or mean

df = pd.read_csv('../data/data_filtered.csv')
for c in df.columns.tolist()[2: 11]:
    df[c].replace(np.nan, df[c].mean(), inplace=True)
for c in df.columns.tolist()[11:]:
    df[c].replace(np.nan, 0.0, inplace=True)
print(df.describe)
# df.to_csv('../data/data_filtered.csv', index=False)



# Delete unnormal data
'''
1. 体重: 改了一个异常数据点 M105147 39 190.5->109.5
2. 头盆关系: 正常值范围18-26
3. 宫高: 正常值范围12-50
4. 尿蛋白: 正常值范围2-20
5. 收缩压/舒张压: 安全值范围50-180/30-120, 交换部分错位数据
6. 水肿: 正常值范围0-9
7. 胎位: 正常值范围32-52
8. 腹围: 正常值范围60-160
'''

df = pd.read_csv('../data/data_filtered.csv')
print(df.head)


l = df['妊娠图头盆关系_pv2'].tolist()
l = [i for i in l if i >= 18]
l = sum(l)/len(l)
df['妊娠图头盆关系_pv2'][df['妊娠图头盆关系_pv2'] < 18] = l
# df.to_csv('../data/data_filtered.csv', index=False)


l = df['妊娠图宫高_pv1'].tolist()
l = [i for i in l if 12 <= i <= 50]
l = sum(l)/len(l)
df['妊娠图宫高_pv1'][df['妊娠图宫高_pv1'] < 12] = l
df['妊娠图宫高_pv1'][df['妊娠图宫高_pv1'] > 50] = l
# df.to_csv('../data/data_filtered.csv', index=False)


l = df['妊娠图收缩压_pv1'].tolist()
l = [i for i in l if 90 <= i <= 140]
l = sum(l)/len(l)
df['妊娠图收缩压_pv1'][df['妊娠图收缩压_pv1'] < 50] = l
df['妊娠图收缩压_pv1'][df['妊娠图收缩压_pv1'] > 180] = l

l = df['妊娠图舒张压_pv1'].tolist()
l = [i for i in l if 60 <= i <= 90]
l = sum(l)/len(l)
df['妊娠图舒张压_pv1'][df['妊娠图舒张压_pv1'] < 30] = l
df['妊娠图舒张压_pv1'][df['妊娠图舒张压_pv1'] > 120] = l
# df.to_csv('data/data_filtered.csv', index=False)

s = df[df['妊娠图收缩压_pv1'] < df['妊娠图舒张压_pv1']].index.tolist()
for i in s:
    df.loc[i, '妊娠图收缩压_pv1'], df.loc[i, '妊娠图舒张压_pv1'] \
        = df.loc[i, '妊娠图舒张压_pv1'], df.loc[i, '妊娠图收缩压_pv1']
# df.to_csv('../data/data_filtered.csv', index=False)


l = df['妊娠图胎位_pv2'].tolist()
l = [i for i in l if 32 <= i <= 52]
l = sum(l)/len(l)
df['妊娠图胎位_pv2'][df['妊娠图胎位_pv2'] < 32] = l
df['妊娠图胎位_pv2'][df['妊娠图胎位_pv2'] > 52] = l
# df.to_csv('../data/data_filtered.csv', index=False)


l = df['妊娠图腹围_pv1'].tolist()
l = [i for i in l if 60 <= i <= 160]
l = sum(l)/len(l)
df['妊娠图腹围_pv1'][df['妊娠图腹围_pv1'] < 60] = l
df['妊娠图腹围_pv1'][df['妊娠图腹围_pv1'] > 160] = l

print(df.head)
# df.to_csv('../data/data_filtered.csv', index=False)


