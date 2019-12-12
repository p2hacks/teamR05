def calcResultData(inputData):
    paramatas = {
        "A1": ["h", "h", "n", "n", "h", "a", "h", "h", "n", "h", "h", "n", "n", "n", "h", "n", "n"],
        "A2": ["a", "h", "n", "n", "h", "n", "h", "h", "n", "h", "h", "n", "n", "n", "n", "n", "n"],
        "A3": ["a", "n", "h", "n", "h", "n", "a", "h", "n", "h", "h", "a", "h", "h", "h", "h", "n"],
        "A4": ["h", "a", "n", "n", "h", "n", "h", "n", "n", "h", "h", "h", "a", "n", "n", "n", "n"],
        "A5": ["h", "l", "n", "n", "h", "n", "h", "n", "n", "h", "h", "h", "h", "n", "n", "n", "n"],
        "A6": ["n", "n", "n", "n", "n", "n", "n", "n", "h", "n", "n", "n", "n", "h", "n", "n", "n"],
        "A7": ["n", "n", "a", "n", "n", "n", "n", "a", "h", "n", "n", "n", "h", "h", "n", "h", "n"],
        "A8": ["n", "n", "a", "h", "n", "n", "n", "n", "h", "n", "n", "n", "h", "n", "n", "n", "n"],
        "A9": ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "h", "n", "n", "n", "h", "a"],
        "A12": ["n", "a", "a", "n", "h", "n", "a", "a", "h", "h", "h", "a", "a", "n", "n", "n", "n"],
        "A13": ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]
    }

    levelData = []

    for i in range(0, len(inputData)):
        if inputData[i] == 1 or inputData[i] == 2:
            levelData.append("l")
        elif inputData[i] == 3:
            levelData.append("m")
        elif inputData[i] == 4 or inputData[i] == 5:
            levelData.append("h")

    score = {"A1": 0, "A2": 0, "A3": 0, "A4": 0, "A5": 0,
            "A6": 0, "A7": 0, "A8": 0, "A9": 0, "A12": 0, "A13": 0}
    highestScore = 0
    datas = []

    def check(levelData, paramata):
        score = 0
        for i in range(0, len(levelData)):
            if levelData[i] == paramata[i] and levelData[i] != "n":
                score += 1
        return score

    for key, value in paramatas.items():
        score[key] = check(levelData, value)

    for key, value in score.items():
        if highestScore < value:
            highestScore = value
        highestScore

    for key, value in score.items():
        if value == highestScore:
            datas.append(key)

    return datas


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
