const express = require('express')
const app = express()
const User = require('./User')
const mongoose = require('mongoose')


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const { default: mongoose } = require('mongoose');
// const { runMain } = require('module');
// const uri = "mongodb+srv://KrishSoni03:Wish504c@cluster0.sx0iw.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('Database is Connected')
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect("mongodb+srv://KrishSoni03:Wish504c@cluster0.sx0iw.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connected to Database")
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3001, () => console.log('Server is running on port 3001'))
 

run()
async function run() {
    const user_1 = new User({ name: "Krish" })
    await user_1.save()
    console.log(user_1)
} 