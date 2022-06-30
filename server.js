const express = require('express')
const app = express()


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://KrishSoni03:Wish504c@cluster0.sx0iw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Database is Connected')
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3001, () => console.log('Server is running on port 3001'))
  