const readline = require('readline');
const fs = require('fs');

const filePath = '/Users/shawn/dev/advent-of-code/day11/test.txt';
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
    printMatrix();
    console.log("");

    // expand universe
    for (let row = 0; row < fileDump.length; row++) {
        if (!fileDump[row].some(e => e == "#")) {
            fileDump.splice(row + 1, 0, fileDump[row]);
            row++;
        }
    }
    printMatrix();

    for (let col = 0; col < fileDump[0].length; col++) {
        let current = [];
        for (let row = 0; row < fileDump.length; row++) {
            current.push(fileDump[row][col]);
        }
        if (!current.some(e => e == "#")) {
            for (row2 = 0; row2 < fileDump.length; row2++) {
                // fileDump[row2].splice(col + 1, 0, "FUCK");
                fileDump[row2] = spliceThatWorks(fileDump[row2], col + 1, ".");
            }
            col++;
        }
    }

    console.log("")
    printMatrix();
        





    // compute all shortest paths

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