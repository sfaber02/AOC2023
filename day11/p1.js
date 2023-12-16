const readline = require('readline');
const fs = require('fs');

const filePath = '/Users/shawn/dev/advent-of-code/day11/p1.txt';
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

    fileDump = fileDump.map(row => row.split(""));

    // expand universe
    for (let row = 0; row < fileDump.length; row++) {
        if (!fileDump[row].some(e => e == "#")) {
            fileDump.splice(row + 1, 0, fileDump[row]);
            row++;
        }
    }


    for (let col = 0; col < fileDump[0].length; col++) {
        let current = [];
        for (let row = 0; row < fileDump.length; row++) {
            current.push(fileDump[row][col]);
        }
        if (!current.some(e => e == "#")) {
            for (row2 = 0; row2 < fileDump.length; row2++) {
                fileDump[row2] = spliceThatWorks(fileDump[row2], col + 1, ".");
            }
            col++;
        }
    }


    // find all galaxies
    let galaxies = [];
    for (let row = 0; row < fileDump.length; row++) {
        for (let col = 0; col < fileDump[row].length; col++) {
            if (fileDump[row][col] == "#") galaxies.push([row, col]);
        }
    }
        
    // compute all shortest paths
    let sum = 0;
    for (let i = 0; i < galaxies.length - 1; i++) {
        for (let j = i + 1; j < galaxies.length; j++) {
            let distance = Math.abs(galaxies[j][0] - galaxies[i][0]) + Math.abs(galaxies[j][1] - galaxies[i][1]);
            sum += distance; 
        }
    }


}

function spliceThatWorks(row, index, element) {
    let temp = [];
    for (let i = 0; i < row.length; i++) {
        if (i == index) {
            temp.push(element);
        }
        temp.push(row[i]);
    }
    return temp;
}

function printMatrix() {
    for (row of fileDump) {
        let printRow = ""
        for (col of row) {
            printRow += `${col} `;
        }
        console.log(printRow);
    }
}

