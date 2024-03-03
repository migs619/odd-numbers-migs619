
const { uuid } = require('uuid');

function generateOddNumbersList(length) {
    let oddNumbersList = [];
    for (let i = 1; i <= length * 2; i += 2) {
        oddNumbersList.push(i);
    }
    return oddNumbersList;
}

// Usage
const oddNumbersList = generateOddNumbersList(10);
console.log(oddNumbersList);


module.exports = { generateOddNumbersList };
