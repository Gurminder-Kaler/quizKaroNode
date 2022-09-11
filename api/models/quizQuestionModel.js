const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quizQuestionSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String, //name of chatroom
    required: 'Question is required!'
  },
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: 'Quiz id is required!'
  },
  // correct: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'QuizOption',
  //   required: 'Option id is required!'
  // },
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

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema)
