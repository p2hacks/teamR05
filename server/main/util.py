def calcResultData(inputData):
    import random
    inputData = [5, 5, 3, 3, 5, 3, 5, 5, 3, 5, 5, 3, 3, 3, 5, 3, 3]
    grades = ["l","m","h"]
    presents = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A12","A13"]
    paramatas = {
        "A1":["h","h","n","n","h","a","h","h","n","h","h","n","n","n","h","n","n"],
        "A2":["a","h","n","n","h","n","h","h","n","h","h","n","n","n","n","n","n"],
        "A3":["a","n","h","n","h","n","a","h","n","h","h","a","h","h","h","h","n"],
        "A4":["h","a","n","n","h","n","h","n","n","h","h","h","a","n","n","n","n"],
        "A5":["h","l","n","n","h","n","h","n","n","h","h","h","h","n","n","n","n"],
        "A6":["n","n","n","n","n","n","n","n","h","n","n","n","n","h","n","n","n"],
        "A7":["n","n","a","n","n","n","n","a","h","n","n","n","h","h","n","h","n"],
        "A8":["n","n","a","h","n","n","n","n","h","n","n","n","h","n","n","n","n"],
        "A9":["n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","h","a"],
        "A12":["n","a","a","n","h","n","a","a","h","h","h","a","a","n","n","n","n"],
        "A13":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
    }

    priority = {
        "A1":1,
        "A2":3,
        "A3":2,
        "A4":4,
        "A5":5,
        "A6":10,
        "A7":9,
        "A8":8,
        "A9":7,
        "A12":6,
        "A13":11
    }

    maxCount = {
        "A1":8,
        "A2":6,
        "A3":9,
        "A4":6,
        "A5":7,
        "A6":2,
        "A7":4,
        "A8":4,
        "A9":2,
        "A12":4,
        "A13":1    
    }

    levelData = []

    for i in range(0,len(inputData)):
        if inputData[i] == 1 or inputData[i] == 2:
            levelData.append("l")
        elif inputData[i] == 3:
            levelData.append("m")
        elif inputData[i] == 4 or inputData[i] == 5:
            levelData.append("h")


    score = {"A1":0,"A2":0,"A3":0,"A4":0,"A5":0,"A6":0,"A7":0,"A8":0,"A9":0,"A12":0,"A13":0}

    datas = []
    results = {}

    def check(levelData,paramata):
        score = 0
        for i in range(0,len(levelData)):
            if levelData[i] == paramata[i] and paramata[i] != "n" and paramata[i] != "a":
                score += 1
            elif (levelData[i] != paramata[i]) and paramata[i] != "n" and paramata[i] != "a":
                score -= 1
        return score

    for key, value in paramatas.items():
        score[key] = check(levelData, value)

    highestScore = float(score[presents[0]]) / maxCount[presents[0]]
    for key, value in score.items():
        if highestScore < (float(value) / maxCount[key]):
            fakenum = float(value) / maxCount[key]
            highestScore = fakenum
        highestScore

    answerCandidatet = []
    for key,value in score.items():
        if float(score[key]) / maxCount[key] == highestScore:
            answerCandidatet.append(key)

    priorityOrdered = sorted(priority.items(), key=lambda x: x[1])
    for key, value in priorityOrdered:
        if key in answerCandidatet:
            datas.append(key)
            if len(datas) == 3:
                break

    results["result"] = datas

    presentSheet = {
        "A1": {
            "B1":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B13":["n","n","n","n","n","h","n","n","n","n","n","n","n","n","n","n","n"],
            "B25":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B50":["n","n","n","n","n","l","n","n","n","n","n","n","n","n","n","n","n"],
            "B37":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B10":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A2": {
            "B2":["l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B14":["h","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B26":["h","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B22":["l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B38":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B45":["l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A3": {
            "B3":["n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n","n"],
            "B15":["n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n","n"],
            "B27":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B24":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B46":["n","n","n","n","n","n","h","n","n","n","n","h","n","n","n","n","n"],
            "B51":["h","n","n","n","n","n","h","n","n","n","n","h","n","n","n","n","n"],
            "B39":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A4": {
            "B4":["n","n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B16":["n","l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B49":["n","n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B28":["n","l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B40":["n","h","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B47":["n","h","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B52":["n","h","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B60":["n","l","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B56":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A5": {
            "B5":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B17":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B29":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B32":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B41":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B48":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A6": {
            "B6":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B18":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A7": {
            "B7":["n","n","h","n","n","n","n","h","n","n","n","n","n","n","n","n","n"],
            "B19":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B31":["n","n","h","n","n","n","n","h","n","n","n","n","n","n","n","n","n"]
        },
        "A8": {
            "B8":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B20":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B53":["n","n","h","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B54":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B55":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B42":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A9": {
            "B9":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B21":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","h"],
            "B34":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","h"],
            "B33":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B43":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        },
        "A12": {
            "B11":["n","n","h","n","n","n","h","n","n","n","n","n","n","n","n","n","n"],
            "B23":["n","h","n","n","n","n","n","h","n","n","n","h","h","n","n","n","n"],
            "B35":["n","h","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B36":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"],
            "B44":["n","n","n","n","n","n","n","n","n","n","n","n","h","n","n","n","n"],
            "B30":["n","h","n","n","n","n","n","n","n","n","n","h","h","n","n","n","n"],
            "B57":["n","h","h","n","n","n","h","n","n","n","n","h","n","n","n","n","n"]
        },
        "A13": {
            "B12":["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"]
        }
    }
    def selectGoodPresents(resultsData, presentSheetData, inputData):
        fakeScore = {}
        for key, value in presentSheetData.items():
            fakeScore[key] = check(inputData, value)

        fakeHighestScore = fakeScore[sorted(presentSheetData.keys())[0]]
        for key, value in fakeScore.items():
            if fakeHighestScore < value:
                fakeHighestScore = value

        fakeAnswerCandidatet = []
        for key, value in fakeScore.items():
            if value == fakeHighestScore:
                fakeAnswerCandidatet.append(key)

        fakeAns = random.sample(fakeAnswerCandidatet, len(fakeAnswerCandidatet))
        ans = fakeAns[0]
        return ans


    def selectPresents(num, resultsData, presentSheetData, goodPresents):
        fakeAns = []
        for i in range(0,num):
            choice = random.sample(list(presentSheetData.keys()), 1)
            if (choice[0] not in goodPresents) and (choice[0] not in fakeAns):
                fakeAns.extend(choice)
        return fakeAns

    goodPresents = []
    presentCandidated = []
    selectedPresents = []
    if len(datas) == 1 and (('A6' not in datas) and ('A13' not in datas) ):
        goodPresents.append(selectGoodPresents(
            datas[0], presentSheet[datas[0]], levelData))
        presentCandidated.extend(selectPresents(
            2, datas[0], presentSheet[datas[0]],goodPresents))
        selectedPresents.extend(goodPresents)
        if len(selectedPresents)!=0:
            selectedPresents.extend(presentCandidated)
    elif len(datas) == 1 and (datas[0] == "A6" or datas[0] == "A13"):
        for key, value in presentSheet[datas[0]].items():
            selectedPresents.append(key)
    elif len(datas) == 2:
        goodPresents.append(selectGoodPresents(
            datas[0],  presentSheet[datas[0]], levelData))
        goodPresents.append(selectGoodPresents(
            datas[1], presentSheet[datas[1]], levelData))
        presentCandidated.extend(selectPresents(
            1, datas[0], presentSheet[datas[0]], goodPresents))
        selectedPresents.extend(goodPresents)
        selectedPresents.extend(presentCandidated)
    elif len(datas) == 3:
        goodPresents.append(selectGoodPresents(
            datas[0], presentSheet[datas[0]], levelData))
        goodPresents.append(selectGoodPresents(
            datas[1], presentSheet[datas[1]], levelData))
        goodPresents.append(selectGoodPresents(
            datas[2], presentSheet[datas[2]], levelData))
        selectedPresents.extend(goodPresents)

    return selectedPresents



def checkInputData(data):
    """
    この関数は整数のlistを受け取りbool型の値を返す
    listの長さが17でありかつlistのすべての要素が1から5の間にある場合Trueを返しそれ以外ではFalseを返す
    ex) 
    [3, 1, 3, 4, 5, 4, 3, 2, 3, 4, 3, 1, 5, 1, 2, 2, 1] --> True
    [3, 1, 3, 4, 5, 4, 3, 2, 3, 4, 3, 1, 5, 1, 2, 2] --> False
    [3, 1, 3, 4, 5, 4, 3, 2, 3, 4, 3, 1, 5, 1, 2, 2, 6] --> False
    [3, 1, 3, 4, 5, 4, 3, 2, 3, 4, 3, 1, 5, 1, 2, 2, 0] --> False
    """
    if len(data) != 17:
        return False
    boolData = [1 <= i <= 5 for i in data]
    if not all(boolData):
        return False
    return True
