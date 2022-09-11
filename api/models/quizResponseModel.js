const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quizResponseSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String
  },
  question: { type: Schema.Types.ObjectId, ref: 'QuizQuestion' },
  answer: { type: Schema.Types.ObjectId, ref: 'QuizOption' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
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

module.exports = mongoose.model('QuizResponse', quizResponseSchema)
