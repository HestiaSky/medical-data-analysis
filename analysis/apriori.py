import pandas as pd
import numpy as np
import pickle


# Apriori

binary_df = pd.read_csv('../data/data_binary.csv')
columns = binary_df.columns.tolist()[2:]
df1 = binary_df[binary_df['label'] == 0]
df2 = binary_df[binary_df['label'] == 1]
columns.append('label')
dataSet = []
for index, row in binary_df.iterrows():
    dataItem = []
    for c in columns:
        if row[c] == 1:
            dataItem.append(c)
    dataSet.append(dataItem)


def createC1(dataSet):
    C1 = []   # 元素个数为1的项集（非频繁项集，因为还没有同最小支持度比较）
    for transaction in dataSet:
        for item in transaction:
            if not [item] in C1:
                C1.append([item])
    C1.sort()
    # 因为除了候选1项集外其他的候选n项集都是以二维列表的形式存在，所以要将候选1项集的每一个元素都转化为一个单独的集合
    # map(frozenset, C1)的语义是将C1由Python列表转换为不变集合（frozenset，Python中的数据结构）
    return list(map(frozenset, C1))


# 找出候选集中的频繁项集
# dataSet为全部数据集，Ck为大小为k（包含k个元素）的候选项集，minSupport为设定的最小支持度
def scanD(dataSet, Ck, minSupport):
    ssCnt = {}   # 记录每个候选项的个数
    for tid in dataSet:
        for can in Ck:
            if can.issubset(tid):
                ssCnt[can] = ssCnt.get(can, 0) + 1   # 计算每一个项集出现的频率
    numItems = float(len(dataSet))
    retList = []
    supportData = {}
    for key in ssCnt:
        support = ssCnt[key] / numItems
        if support >= minSupport:
            retList.insert(0, key)  # 将频繁项集插入返回列表的首部
        supportData[key] = support
    return retList, supportData   # retList为在Ck中找出的频繁项集（支持度大于minSupport的），supportData记录各频繁项集的支持度


# 通过频繁项集列表Lk和项集个数k生成候选项集C(k+1)。
def aprioriGen(Lk, k):
    retList = []
    lenLk = len(Lk)
    for i in range(lenLk):
        for j in range(i + 1, lenLk):
            # 前k-1项相同时，才将两个集合合并，合并后才能生成k+1项
            L1 = list(Lk[i])[:k-2]
            L2 = list(Lk[j])[:k-2]   # 取出两个集合的前k-1个元素
            L1.sort()
            L2.sort()
            if L1 == L2:
                retList.append(Lk[i] | Lk[j])
    return retList


# 获取事务集中的所有的频繁项集
# Ck表示项数为k的候选项集，最初的C1通过createC1()函数生成。Lk表示项数为k的频繁项集，supK为其支持度，Lk和supK由scanD()函数通过Ck计算而来。
def apriori(dataSet, minSupport=0.5):
    C1 = createC1(dataSet)  # 从事务集中获取候选1项集
    D = list(map(set, dataSet))  # 将事务集的每个元素转化为集合
    L1, supportData = scanD(D, C1, minSupport)  # 获取频繁1项集和对应的支持度
    L = [L1]  # L用来存储所有的频繁项集
    k = 2
    while len(L[k-2]) > 0 and k < 3:  # 一直迭代到项集数目过大而在事务集中不存在这种n项集
        Ck = aprioriGen(L[k-2], k)   # 根据频繁项集生成新的候选项集。Ck表示项数为k的候选项集
        Lk, supK = scanD(D, Ck, minSupport)  # Lk表示项数为k的频繁项集，supK为其支持度
        L.append(Lk)
        supportData.update(supK)  # 添加新频繁项集和他们的支持度
        k += 1
    return L, supportData


def generateRules(L, supportData, minConf=0.7):
    # 频繁项集列表、包含那些频繁项集支持数据的字典、最小可信度阈值
    bigRuleList = []  # 存储所有的关联规则
    for i in range(1, len(L)):  # 只获取有两个或者更多集合的项目，从1,即第二个元素开始，L[0]是单个元素的
        # 两个及以上的才可能有关联一说，单个元素的项集不存在关联问题
        for freqSet in L[i]:
            if 'label' in freqSet:
                H1 = [frozenset(['label'])]
            else:
                continue
            # 该函数遍历L中的每一个频繁项集并对每个频繁项集创建只包含单个元素集合的列表H1
            if i > 1:
                # 如果频繁项集元素数目超过2,那么会考虑对它做进一步的合并
                rulesFromConseq(freqSet, H1, supportData, bigRuleList, minConf)
            else:  # 第一层时，后件数为1
                calcConf(freqSet, H1, supportData, bigRuleList, minConf)# 调用函数2
    return bigRuleList


def calcConf(freqSet, H, supportData, brl, minConf=0.7):
    # 针对项集中只有两个元素时，计算可信度
    prunedH = []# 返回一个满足最小可信度要求的规则列表
    for conseq in H:# 后件，遍历 H中的所有项集并计算它们的可信度值
        conf = supportData[freqSet]/supportData[freqSet-conseq] #可信度计算，结合支持度数据
        if conf >= minConf:
            print(freqSet-conseq, '-->', conseq, 'conf:', conf)
            # 如果某条规则满足最小可信度值,那么将这些规则输出到屏幕显示
            brl.append((freqSet-conseq, conseq, conf))#添加到规则里，brl 是前面通过检查的 bigRuleList
            prunedH.append(conseq)# 同样需要放入列表到后面检查
    return prunedH


def rulesFromConseq(freqSet, H, supportData, brl, minConf=0.7):
    # 参数:一个是频繁项集,另一个是可以出现在规则右部的元素列表 H
    m = len(H[0])
    if len(freqSet) > (m + 1):  # 频繁项集元素数目大于单个集合的元素数
        Hmp1 = aprioriGen(H, m+1)  # 存在不同顺序、元素相同的集合，合并具有相同部分的集合
        Hmp1 = calcConf(freqSet, Hmp1, supportData, brl, minConf)#计算可信度
        if len(Hmp1) > 1:
            # 满足最小可信度要求的规则列表多于1,则递归来判断是否可以进一步组合这些规则
            rulesFromConseq(freqSet, Hmp1, supportData, brl, minConf)


L, suppData = apriori(dataSet, minSupport=0.0)
rules = generateRules(L, suppData, minConf=0.0)


# 收缩压和舒张压就是症状，因此关联度极高，但不具有前瞻性
# strong: ~0.625 or 1.6~
# weak: 0.625~0.8 or 1.2~1.6
# none: 0.8~1.2
correlation = ['妊娠图收缩压_pv1', '妊娠图舒张压_pv1']
strongCorrelationHigh = ['妊娠图尿蛋白_pv2', '妊娠图水肿_pv2', '妊娠图体重_pv1', '妊娠图腹围_pv1',
                         '血常规_红细胞', '血常规_单核细胞百分比']
weakCorrelationHigh = ['妊娠图头盆关系_pv2', '血常规_嗜碱细胞绝对值', '血常规_淋巴细胞绝对值']
strongCorrelationLow = ['血常规_大血小板比率']
weakCorrelationLow = ['血常规_平均RBC血红蛋白量', '血常规_平均RBC体积']

