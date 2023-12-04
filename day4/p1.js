const readline = require('readline');
const fs = require('fs');

const filePath = '/Users/shawn/dev/advent-of-code/day4/input.txt';
const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity, // to handle both \r\n and \n line endings
});

const cards = [];

rl.on('line', (line) => {
  console.log(`Line: ${line}`);
  cards.push(line);
});

// Event listener when the file reading is complete
rl.on('close', () => {
    console.log('File reading complete.');
    main(cards);
    
});

function main(cards) {
    console.log(cards);
    final_sum = 0;
    for (card of cards) {
        winningNumbers = card.split("|")[0].split(":")[1].trim().split(' ');
        console.log(winningNumbers);
        playNumbers = card.split("|")[1].split(' ').filter(e => e !== '');
        console.log(playNumbers);

        cardSum = 0;
        for (num of playNumbers) {
            if (winningNumbers.includes(num)) {
                console.log(num)
                if (cardSum == 0) {
                    cardSum = 1;
                } else {
                    cardSum *= 2;
                }
            }
        }
        console.log(`Card Val = ${cardSum}`)
        final_sum += cardSum;
    }

    console.log (`Final Sum = ${final_sum}`);
}
