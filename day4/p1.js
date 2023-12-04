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
  cards.push([1, line]);
});

// Event listener when the file reading is complete
rl.on('close', () => {
    main(cards);    
});

function main(cards) {
    final_sum = 0;

    for (let card = 0; card < cards.length; card++) {
        winningNumbers = cards[card][1].split("|")[0].split(":")[1].trim().split(' ');
        playNumbers = cards[card][1].split("|")[1].split(' ').filter(e => e !== '');

        for (let numCards = 1; numCards <= cards[card][0]; numCards++) {
            matchCount = 0;
            for (let i = 0; i < playNumbers.length; i++) {
                if (winningNumbers.includes(playNumbers[i])) {
                    matchCount += 1
                }
            }
    
            for (let j = card + 1; j <= matchCount + card; j++) {
                cards[j][0]++;
            }
        }
    }

    finalSum = cards.map(e => e[0]).reduce((el, acc) => el + acc);
    console.log(finalSum)
}
