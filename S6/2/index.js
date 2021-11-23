const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.use(express.static("public"))


app.get('/', (req, res) => {
    console.log("32132132132123")
    
//   res.send('Hello David!')
})

// https://www.geeksforgeeks.org/node-js-fs-readfile-method/
app.get('/api/boardgames', (req, res) => {
    fs.readFile("boardgames.json", function(err, data) {
        console.log(data);
        let boardgames = JSON.parse(data);
        res.send(boardgames);
    });
})

// https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
app.get('/api/boardgame', (req, res) => {
    // fs.readFile("boardgames.json", function(err, data) {
    //     console.log(data);
    //     let boardgames = JSON.parse(data);
    //     res.send(boardgames);
    // });

})

app.listen(port, () => {
  console.log(`My first REST API Example app listening at http://localhost:${port}`)
})