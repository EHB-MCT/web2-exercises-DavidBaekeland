const fs = require('fs/promises');
const express = require('express');
const bodyParser = require('body-parser')
const { MongoClient } = require("mongodb");
const config = require("./config.json");

// create the mongo Client to use
const client = new MongoClient(config.uri)

const app = express()
const port = 3000


app.use(express.static("public"));
// alle code wordt eerst uitgevoerd door middelware (bodyParser) dan in functies
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log("32132132132123")
    res.redirect("/info.html")
  
})

app.get('/api/boardgames', async(req, res) => {
    try {
        await client.connect();

        // retrieve the boardgame collection data
        // find: not an async function => const bgs = client.db('session5').collection('boardgames').find({}).toArray(); => niet mogelijk
        const collection = client.db('session5').collection('boardgames2');
        const bgs = await collection.find({}).toArray();


        // let data = JSON.parse(result);
        res.status(200).send(bgs);
        res.status(200).send(bgs[0]._id);
    }catch(error)  {
        console.log(error);
        res.status(500).send({
            error: 'error',
            value: error
        });
    }finally  {
        await client.close();
    }
})

app.get('/api/boardgame', async function(req, res) {
    let id = req.query.id;
    // console.log(id);

    try{
        await client.connect();

        // retrieve the boardgame collection data
        // find: not an async function => const bgs = client.db('session5').collection('boardgames').find({}).toArray(); => niet mogelijk
        const collection = client.db('session5').collection('boardgames2');
        




        // https://docs.mongodb.com/drivers/node/current/usage-examples/findOne/
        // id => moet int zijn => automatisch => string
        const query = { bggid: Number(id) };
        const options = {
            // Include only the `title` and `imdb` fields in the returned document
            projection: { _id: 0},
        };




        const bg = await collection.findOne(query, options)

        if(bg)  {
            res.status(200).send(bg);
            return;
        }  else  {
            res.status(400).send('Boardgame could not found with id: ' + id)
        }
    }catch(error)  {
        console.log(error);
        res.status(500).send({
            error: 'error',
            value: error
        });
    }finally {
        await client.close();
    }
})

app.post('/api/saveData', async (req, res)  =>  {
    console.log(req.body);
    data = JSON.stringify(req.body);
    try  {
        let result = await fs.writeFile(`test.json`, data);

    } catch(error)  {
        console.log(error);
    }
    res.send(`Data recieved with id ${req.body.id}`);
})


// app.post('/api/saveBoardgame', async (req, res)  =>  {
//     if(!req.body.bggid || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.descriptions)  {
//         res.status(400).send(' Bad request: midding id, name, genre, mechanisms or description');
//         return
//     }

//     if(boardgames[req.body.bggid])  {
//         res.status(400).send('Bad request: boardgame already exists with bggid ' + req.body.bggid);
//         return;
//     }
    
//     try  {
//         let result = await fs.writeFile(`test.json`, data);
        

//     } catch(error)  {
//         console.log(error);
//     }
//     res.send(`Data recieved with id ${req.body.id}`);
// })


app.post('/api/saveBoardgame', async (req, res)  =>  {
    if(!req.body.bggid || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.description)  {
        res.status(400).send(' Bad request: missing id, name, genre, mechanisms or description');
        return;
    }
    
    
    try  {
        await client.connect();

        // retrieve the boardgame collection data
        // find: not an async function => const bgs = client.db('session5').collection('boardgames').find({}).toArray(); => niet mogelijk
        const collection = client.db('session5').collection('boardgames2');
        
        // validate for double boardgames
        // query?
        const bg = await collection.findOne({bggid: req.body.bggid})
        if(bg)  {
            res.status(400).send('Bad request: boardgame already exists with bggid ' + req.body.bggid);
            return;
        }


        // create the new boardgame object
        let newBoardgame  =  {
            bggid: req.body.bggid,
            name: req.body.name,
            mechanisms: req.body.mechanisms,
            description: req.body.description
        };

        // Insert into the database
        let insertResult = await collection.insertOne(newBoardgame);
        console.log(`A document was inserted with the _id: ${insertResult.insertedId}`);


        

        // 201: data => updated
        res.status(201).send(`boardgame succesfully saved with id ${req.body.bggid}`);
    } catch(error)  {
        console.log(error);
        res.status(500).send({
            error: 'error',
            value: error
        });
    } finally  {
        await client.close();
    }
})


app.listen(port, () => {
  console.log(`My first REST API Example app listening at http://localhost:${port}`)
})