import * as fs from 'fs/promises';

// MJS -> anders await niet uitvoeren
let result = await fs.readFile("boardgames.json");
// Buffer -> json
let data = JSON.parse(result);
console.log(data);
