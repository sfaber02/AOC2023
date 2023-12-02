id_sum = 0

with open("/Users/shawn/dev/advent-of-code/day2/p1.txt", "r") as file:
    for line in file:
        line_dict = {}
        current_line = line
        game = current_line.split(" ")
        game = game[1].split(":")[0].strip()
        stones = current_line.split(":")[1].split(";")

        for draw in stones:
            draw = draw.strip().split(",")
            for draw2 in draw:
                draw2 = draw2.strip().split(" ")
                color = draw2[1].strip()
                num = int(draw2[0].strip())
                if color in line_dict and num > line_dict[color]:
                    line_dict[color] = num
                elif not color in line_dict:
                    line_dict[color] = num
        if (
            line_dict["red"] <= 12
            and line_dict["green"] <= 13
            and line_dict["blue"] <= 14
        ):
            id_sum += int(game.strip())
    print(id_sum)
