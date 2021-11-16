import * as fs from 'fs/promises';

// Data lezen
// MJS -> anders await niet uitvoeren of type modules package.json
let result = await fs.readFile("boardgames.json");
// Buffer -> json
let data = JSON.parse(result);
// console.log(data[120677]);

// Nieuwe json
try{
    // niet voor arrau -> foreacht
    // game -> kan alles zijn: qsdfsdqf werkt ook
    for(let test in data) {
        // console.log(test);
        let boardgame = JSON.stringify(data[test]);

        let result2 = await fs.writeFile(`${test}.json`, boardgame);
    }
}catch(err) {
    console.log(err)
}


