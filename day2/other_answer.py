import re

with open("/Users/shawn/dev/advent-of-code/day2/p1.txt") as f:
    games = f.read().split("\n")


def getNumbers(x):
    redNumber = re.findall(r"[0-9]+ red", x)
    greenNumber = re.findall(r"[0-9]+ green", x)
    blueNumber = re.findall(r"[0-9]+ blue", x)

    return redNumber, greenNumber, blueNumber


def getDigit(x, color):
    if color == "red":
        redTemp = re.findall(r"[0-9]+", x)
        return redTemp
    elif color == "green":
        greenTemp = re.findall(r"[0-9]+", x)
        return greenTemp
    elif color == "blue":
        blueTemp = re.findall(r"[0-9]+", x)
        return blueTemp
    else:
        return 0


redMax = 12
greenMax = 13
blueMax = 14
check = 0
sumID = 0

sets = []

for x in range(len(games)):
    sets = getNumbers(games[x])
    print(sets)
    for y in range(len(sets[0])):
        redNumber = getDigit(sets[0][y], "red")
        redCheck = int(redNumber[0])
        if redCheck > redMax:
            check = check + 1
    for y in range(len(sets[1])):
        greenNumber = getDigit(sets[1][y], "green")
        greenCheck = int(greenNumber[0])
        if greenCheck > greenMax:
            check = check + 1
    for y in range(len(sets[2])):
        blueNumber = getDigit(sets[2][y], "blue")
        blueCheck = int(blueNumber[0])
        if blueCheck > blueMax:
            check = check + 1

    if check == 0:
        print(f"GAME {x+1} WORKS")
        sumID = sumID + (x + 1)

    check = 0

print(sumID)
