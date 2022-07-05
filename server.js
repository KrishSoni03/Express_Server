const express = require('express')
const app = express()
const User = require('./User')
const { usersTable } = require('./User')
const mongoose = require('mongoose')
 


try {
    app.listen(3001, () => console.log('Server is running on port 3001'))
} catch (error) {
    console.error(error)
}

try {
    mongoose.connect("mongodb+srv://KrishSoni03:Wish504c@cluster0.sx0iw.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connected to Database")
})
} catch (error) {
    console.error(error)
}

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/", async (req, res) => {
    const x = req.body
    const user_1 = new User({ name: x})
    await user_1.save()
    console.log(user_1)
})



// run()
// async function run() {
//     const user_1 = new User({ name: "Krish" })
//     await user_1.save()
//     console.log(user_1)
// }