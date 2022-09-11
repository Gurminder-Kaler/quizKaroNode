const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quizSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String
  },
  category: { type: Schema.Types.ObjectId, ref: 'QuizCategory' },
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

module.exports = mongoose.model('Quiz', quizSchema)
