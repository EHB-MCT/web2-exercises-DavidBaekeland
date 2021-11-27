const fs = require('fs/promises');
const fs2 = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(express.static("public"));
// alle code wordt eerst uitgevoerd door middelware (bodyParser) dan in functies
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log("32132132132123")
    res.redirect("/test.html")
  
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

    // console.log(data);
    try{
        for(let test in data) {
            if(test == id) {
                let boardgame = data[test];
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

// https://www.youtube.com/watch?v=8j8qc6sx7Xo
app.post('/api/saveData', (req, res)  =>  {
    console.log(req.body);
    res.send(`Data recieved with id ${req.body.id}`);
})

app.listen(port, () => {
  console.log(`My first REST API Example app listening at http://localhost:${port}`)
})