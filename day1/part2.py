import re
import six


pattern = r"[0-9]"


num_dict = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}

"""
6npp7fivebghnnxnqjxhhxfdqpsixfour

for this case my code is resolving to 6 for the last digit
segment would be fivebghnnxnqjxhhxfdqpsixfour
"""
return_val = 0

with open("./part2.txt", "r") as file:
    for line in file:
    # for _ in range(1):
        first = ""
        last = ""
        current_line = line.strip()
        # current_line = "6npp7fivebghnnxnqjxhhxfdqpsixfour"
        print("*****")
        print(current_line)

        for i in range(len(current_line)):
            if first == "":
                if re.match(pattern, current_line[i]):
                    first = current_line[i]
                else:
                    last_i_of_segment = i
                    for last_i_of_segment in range(i, len(current_line)):
                        if re.match(pattern, current_line[last_i_of_segment]):
                            break
                    segment = current_line[i:last_i_of_segment]
                    # print(f"segment = {segment}")
                    for key in num_dict.keys():
                        if key in segment:
                            first = num_dict[key]
                            i = last_i_of_segment - 1
                            # print (f"found key = {key}")

            if last == "":
                reverse_index = len(current_line) - 1 - i
                if re.match(pattern, current_line[reverse_index]):
                    last = current_line[reverse_index]
                else:
                    print("!!!")
                    first_i_of_segment = reverse_index
                    print(f"start of first_i = {first_i_of_segment}")
                    for first_i_of_segment in range(reverse_index, 0, -1):
                        if re.match(pattern, current_line[first_i_of_segment]):
                            break
                        print(current_line[first_i_of_segment])
                    print(
                        f"first_i_of_segment = {first_i_of_segment} and i = {reverse_index}"
                    )
                    segment = current_line[first_i_of_segment + 1 : reverse_index + 1]
                    print(f"segment = {segment}")
                    print(f"last_i_of_segment = {first_i_of_segment}")
                    for key in num_dict.keys():
                        if key in segment:
                            last = num_dict[key]
                            print (f"found key = {key}")
                            break

        line_val = int(first + last)
        print(f"line_val = {line_val}")
        return_val += line_val

    print(return_val)
    # line = file.readline()
    # print(line)
    # split_line = re.split(pattern, line)
    # print(split_line)
