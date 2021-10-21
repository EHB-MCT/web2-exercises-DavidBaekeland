const Cleave = require("../node_modules/cleave.js/dist/cleave");

let cleave = new Cleave('.my-input', {
    uppercase: true
});

let date = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

let RRN = new Cleave('.RRN', {
    delimiters: ['.', '.', '-', '.'],
    blocks: [2, 2, 2, 3,2],
    uppercase: true
});

let age = new Cleave('.age', {
    blocks: [2, 5, 5]
});

// let number = new Cleave('.number', {
//     phone: true,
//     phoneRegionCode: 'Belgiul'
// });


