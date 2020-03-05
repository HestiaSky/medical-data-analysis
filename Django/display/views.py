from django.shortcuts import render
import json
import os

# Create your views here.


def login(request):
    return render(request, 'login.html')


def tables(request):
    js = json.load(open('static/data/data.json', 'r', encoding='utf-8'))
    describe = js['describeTable']
    link = js['linkTable']
    return render(request, 'tables.html', {'describe': describe, 'link': link})


def charts(request):
    return render(request, 'charts.html')


def forms(request, predict=None):
    if predict is None:
        predict = {}
        predict['result'] = '健康'
        predict['result_'] = 0
        predict['conf'] = 100
    return render(request, 'forms.html', {'predict': predict})


def predict(request):
    label = ['收缩压', '舒张压', '尿蛋白', '水肿', '体重', '腹围', '头盆关系', '红细胞', '单核细胞百分比',
             '大小血板比率', '平均RBC血红蛋白量', '平均RBC体积', '嗜碱细胞绝对值', '淋巴细胞绝对值']
    rate = [2.83, 2.95, 2.57, 2.31, 1.86, 1.79, 1.26, 1.72, 2.66, 1.75, 1.28, 1.30, 1.29, 1.29]
    rg = [(80, 180), (40, 120), (2, 20), (1, 9), (0, 140), (65, 160), (20, 26),
          (0, 6), (0, 1), (0, 1), (20, 68), (80, 123), (0, 6), (0, 12)]
    threshold = [132, 85, 3, 4, 76, 105, 25, 4, 0.0001, 0.0001, 33, 95, 0.0001, 2]

    p = 1.0
    for i in range(14):
        k = float(request.POST[label[i]])
        if k is None:
            continue
        if k < rg[i][0] or k > rg[i][1]:
            continue
        if k > threshold[i]:
            p *= rate[i]

    predict = {}
    if p > 3:
        predict['result'] = '患病'
        predict['result_'] = 100
        predict['conf'] = round(p / 10 * 100, 2)
    else:
        predict['result'] = '健康'
        predict['result_'] = 0
        predict['conf'] = round((1 - p / 10) * 100, 2)
    return forms(request, predict)



