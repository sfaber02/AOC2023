const readline = require('readline');
const fs = require('fs');

const filePath = '/Users/shawn/dev/advent-of-code/day8/.txt';
const fileStream = fs.createReadStream(filePath);
var fileDump = [];

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity, // to handle both \r\n and \n line endings
});

rl.on('line', (line) => {
  fileDump.push(line);
});

// Event listener when the file reading is complete
rl.on('close', () => {
    main();    
});

function main() {
    const instructions = fileDump.shift().split('');
    fileDump.shift();

    console.log(instructions);
    console.log("HI");

    const map = {}
    fileDump.forEach(e => {
        const mainKey = e.split(" ")[0];
        const left = e.split('=')[1].slice(2, 5);
        const right = e.split('=')[1].slice(7, 10);
        map[mainKey] = {"left": left, "right": right};
    })

    let current = "AAA"
    let instruction = instructions[0];
    let i = 0;
    let steps = 0;

    while (map[current] !== "ZZZ" && current !== "ZZZ") {
        if (i > instructions.length - 1) i = 0;
        current = instructions[i] == 'L' ? map[current]["left"] : map[current]["right"] 
        steps++;
        i++;
    }

    console.log(`steps = ${steps}`);

    
    
}
