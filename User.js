const mongoose = require('mongoose')
const validate = require('mongoose-validator')

var nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only',
    }),
  ]

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: nameValidator
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

})



module.exports = mongoose.model("User", userSchema)
let usersTable = mongoose.model("User", userSchema)

