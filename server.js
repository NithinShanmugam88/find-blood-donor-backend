import express from "express";

import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8000;
//const connection_url = 'mongodb+srv://nithin888:nithin888@cluster0.eky1s.mongodb.net/findmydonor?retryWrites=true&w=majority';
const connection_url = 'mongodb://find-blood-donor:uNtZhnli74Ao8ovuypF2Y6uINPuAmlAMCQabZiXLddD5ceeqjCyxaFPvZSqbgOUrSH4huMbgsB9Y96JBLUBdKw==@find-blood-donor.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@find-blood-donor@';
//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello"));
app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req,res) => {
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});
//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));