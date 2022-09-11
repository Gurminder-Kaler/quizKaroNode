const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quizOptionSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String, //name of chatroom
    required: 'Option is required!'
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'QuizQuestion',
    required: 'Quiz question id is required!'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('QuizOption', quizOptionSchema)
