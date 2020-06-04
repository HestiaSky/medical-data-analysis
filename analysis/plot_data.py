import pandas as pd
import json
import operator


'''
{
    'lineChart': [
        {
            'name': 体重,
            'label': [10.0],
            'data0': [10000],
            'data1': [9000]
        },
    ],
    'barChart': {
        'label': [体重, 红细胞],
        'data0': [124, 45],
        'data1': [135, 85]
    },
    'describeTable': [
        {
            'index': 1,
            'name': 体重,
            'mean': 100,
            'min': 60,
            'q1': 80,
            'q2': 100,
            'q3': 125,
            'max': 150
        }
    ],
    'linkTable': [
        {
            'index': 1,
            'name': 体重,
            'rate': 1.4,
            'conf': 强关联
        }
    ]
}
'''


js = {'lineChart': [], 'barChart': {}, 'describeTable': [], 'linkTable': []}

df = pd.read_csv('../data/data_filtered.csv')
l1 = df[df['label'] == 0]
l2 = df[df['label'] == 1]

cols = df.columns.tolist()[2:-1]
for c in cols:
    Max = df[c].max()
    Min = df[c].min()
    t = (Max-Min)/10
    name = [round(Min + (i+0.5) * t, 3) for i in range(10)]
    bins = pd.cut(l1[c], 10, labels=name)
    tmp = pd.value_counts(bins).to_dict()
    tmp1 = [tmp[k] for k in sorted(tmp.keys())]
    bins = pd.cut(l2[c], 10, labels=name)
    tmp = pd.value_counts(bins).to_dict()
    tmp2 = [tmp[k]*14 for k in sorted(tmp.keys())]

    dict = {'name': c, 'label': name, 'data0': tmp1, 'data1': tmp2}
    js['lineChart'].append(dict)

df = pd.read_csv('../data/data_derived.csv')
l1 = df[df['label'] == 0]
l2 = df[df['label'] == 1]
cols = ['妊娠图收缩压_pv1', '妊娠图舒张压_pv1', '妊娠图尿蛋白_pv2', '妊娠图水肿_pv2', '妊娠图体重_pv1', '妊娠图腹围_pv1',
        '血常规_红细胞', '血常规_单核细胞百分比', '妊娠图头盆关系_pv2', '血常规_嗜碱细胞绝对值', '血常规_淋巴细胞绝对值',
        '血常规_大血小板比率', '血常规_平均RBC血红蛋白量', '血常规_平均RBC体积']
rate = [1, 1, 50, 30, 1, 1, 50, 100000, 5, 20000, 100, 100000, 5, 2]
name = cols
data0 = []
data1 = []
for c in cols:
    data0.append(l1[c].mean())
    data1.append(l2[c].mean())
data0 = [int(data0[i]*rate[i]) for i in range(14)]
data1 = [int(data1[i]*rate[i]) for i in range(14)]
js['barChart']['label'] = name
js['barChart']['data0'] = data0
js['barChart']['data1'] = data1

df = pd.read_csv('../data/data_derived.csv')
des = df.describe()
idx = 0
for c in des.columns.tolist()[:-1]:
    idx += 1
    li = des[c].tolist()
    dict = {'index': idx, 'name': c, 'mean': round(li[1], 5), 'min': li[3], 'q1': li[4], 'q2': li[5], 'q3': li[6], 'max': li[7]}
    js['describeTable'].append(dict)

relations = [
    ('妊娠图头盆关系_pv2', 0.08333333333333333),
    ('血常规_单核细胞百分比', 0.17647058823529413),
    ('血常规_嗜酸细胞绝对值', 0.07780320366132723),
    ('血常规_单核细胞绝对值', 0.06642066420664207),
    ('妊娠图尿蛋白_pv2', 0.17073170731707318),
    ('血常规_红细胞分布宽度', 0.05714285714285714),
    ('生化D_钙', 0.07003891050583658),
    ('血常规_大血小板比率', 0.0379746835443038),
    ('血常规_嗜碱细胞绝对值', 0.0859375),
    ('血常规_平均RBC血红蛋白量', 0.052057467186945726),
    ('血常规_平均RBC体积', 0.05085882984433709),
    ('生化D_磷', 0.06906206252916472),
    ('生化D_直接胆红素', 0.05930807248764415),
    ('生化D_丙氨酸氨基转移酶', 0.05856653025107842),
    ('生化D_天冬氨酸氨基转移酶', 0.057694504741231584),
    ('生化D_总胆红素', 0.05792256731295205),
    ('生化D_尿酸', 0.06862691911246134),
    ('生化D_总胆汁酸', 0.058720930232558144),
    ('生化D_白蛋白:球蛋白', 0.05501755235443651),
    ('血常规_血小板平均体积', 0.06290743155149935),
    ('血常规_白细胞', 0.07788475355654548),
    ('生化D_总蛋白', 0.06385758615057978),
    ('生化D_肌酐', 0.06760331550173417),
    ('生化D_球蛋白', 0.06481634451236301),
    ('生化D_铁', 0.060180603661553686),
    ('血常规_平均RBC血红蛋白浓度', 0.06425410341157359),
    ('血常规_淋巴细胞绝对值', 0.08575112830431979),
    ('血常规_血小板分布宽度', 0.05896752434314312),
    ('妊娠图宫高_pv1', 0.07599347568208778),
    ('妊娠图水肿_pv2', 0.15350523771152297),
    ('妊娠图体重_pv1', 0.12319054652880355),
    ('血常规_红细胞分布宽度(SD)', 0.05697667852504376),
    ('妊娠图收缩压_pv1', 0.1880049537064339),
    ('妊娠图腹围_pv1', 0.11890786783618018),
    ('妊娠图舒张压_pv1',  0.19552682159706447),
    ('血常规_血小板计数', 0.07821045723036534),
    ('血常规_红细胞', 0.11448066717210008)
]

linkTable = []
for relation in relations:
    dict = {'name': relation[0]}
    rate = relation[1]/0.06638
    if rate < 1:
        rate = 1 / rate
    dict['rate'] = round(rate, 2)
    if rate < 1.2:
        dict['conf'] = '无关联'
    elif 1.2 < rate < 1.6:
        dict['conf'] = '弱关联'
    elif rate > 1.6:
        dict['conf'] = '强关联'
    linkTable.append(dict)

linkTable.sort(key=operator.itemgetter('rate'), reverse=True)
for i in range(len(linkTable)):
    linkTable[i].update({'index': i + 1})
js['linkTable'] = linkTable
for k, v in js.items():
    print(k)
    print(v)
# json.dump(js, open('../Django/static/data/data.json', 'w', encoding='utf-8'))












