const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))


app.get('/', (req, res) => {
    console.log("32132132132123")
    res.redirect('info.html');
//   res.send('Hello David!')
})

app.get('/randomtext', (req, res) => {
  res.send('test')
})

app.get('/getData', (req, res) => {
    let data = {
        name: "David",
        age: 19 
    }
    res.send(data)
  })

app.listen(port, () => {
  console.log(`My first REST API Example app listening at http://localhost:${port}`)
})