const readline = require('readline');
const fs = require('fs');

const filePath = '/Users/shawn/dev/advent-of-code/day8/day8.txt';
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
        map[mainKey] = {"L": left, "R": right};
    })

    let i = 0;
    // let steps = 0;

    let startIndices = Object.keys(map).filter(e => e[2] == 'A');
    const stepsToZ = [];

    for (let index = 0; index < startIndices.length; index++) {
        let current = startIndices[index]
        let steps = 0;
        while (map[current][2] !== "Z" && current[2] !== "Z") {
            if (i > instructions.length - 1) i = 0;
            current = map[current][instructions[i]];
            steps++;
            i++;
        }
        stepsToZ[index] = steps
    }

    const gcd = (a, b) => a ? gcd(b % a, a) : b;
    const lcm = (a, b) => a * b / gcd(a, b);


    let answer = stepsToZ.reduce(lcm)

    console.log(`steps = ${answer}`);

    
    
}





// function findLCM(arr) {
//   // Function to find the greatest common divisor (GCD) of two numbers
//   function findGCD(a, b) {
//     return b === 0 ? a : findGCD(b, a % b);
//   }

//   // Function to find the LCM of two numbers
//   function findLCMOfTwo(a, b) {
//     return (a * b) / findGCD(a, b);
//   }

//   // Function to find the LCM of an array of numbers
//   function findLCMOfArray(arr) {
//     let lcm = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       lcm = findLCMOfTwo(lcm, arr[i]);
//     }
//     return lcm;
//   }

//   return findLCMOfArray(arr);
// }


