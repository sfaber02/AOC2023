power_of_cubes = 0

with open("/Users/shawn/dev/advent-of-code/day2/p1.txt", "r") as file:
    for line in file:
        game_dict = {}
        game_power = 0
        stones = line.split(":")[1].split(";")

        for draw in stones:
            draw_dict = {}
            draw = draw.strip().split(",")
            for draw2 in draw:
                draw2 = draw2.strip().split(" ")
                color = draw2[1].strip()
                num = int(draw2[0].strip())
                if color in draw_dict:
                    draw_dict[color] += num
                else:
                    draw_dict[color] = num

            # compare draw_dict vals to game dict vals and update largest
            for key in draw_dict.keys():
                if key in game_dict and game_dict[key] < draw_dict[key]:
                    game_dict[key] = draw_dict[key]
                elif not key in game_dict:
                    game_dict[key] = draw_dict[key]

        for key in game_dict.keys():
            if game_power == 0:
                game_power = game_dict[key]
            else:
                game_power *= game_dict[key]

        power_of_cubes += game_power

    print(f"power of cubes = {power_of_cubes}")
