import re

return_val = 0
pattern = r"^[0-9]$"

with open("./day1.txt", "r") as file:
    for line in file:
        first = ""
        last = ""
        current_line = line.strip()

        for index in range(len(current_line)):
            if re.match(pattern, current_line[index]) and first == "":
                first = current_line[index]
            if re.match(pattern, current_line[len(current_line) - 1 - index]) and last == "":
                last = current_line[len(current_line) - 1 - index]

        line_val = int(first + last)
        return_val += line_val


print(return_val)
