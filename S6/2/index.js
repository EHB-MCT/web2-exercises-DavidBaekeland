const fs = require('fs/promises');
const fs2 = require('fs');
const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))


app.get('/', (req, res) => {
    console.log("32132132132123")
    
  res.send('Hello David!')
})

// https://www.geeksforgeeks.org/node-js-fs-readfile-method/
app.get('/api/boardgames', (req, res) => {
    fs2.readFile("boardgames.json", function(err, data) {
        console.log(data);
        let boardgames = JSON.parse(data);
        res.send(boardgames);
    });
})

// https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
// https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express
// http://localhost:3000/api/boardgame?id=12122
app.get('/api/boardgame', async function(req, res) {
    let id = req.query.id;
    console.log(id);

    let result = await fs.readFile("boardgames.json");
    // console.log(result);

    let data = JSON.parse(result);
    try{
        for(let test in data) {
            if(test == id) {
                let boardgame = data[test]
                res.send(boardgame);
            }
        }
    }catch(err) {
        console.log(err)
    }
})
    
// https://expressjs.com/en/guide/routing.html
// http://localhost:3000/api/boardgame/12122
// app.get('/api/boardgame/:id', (req, res) => {
//     console.log(req.params);
// })

app.listen(port, () => {
  console.log(`My first REST API Example app listening at http://localhost:${port}`)
})