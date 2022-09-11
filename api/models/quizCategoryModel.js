const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quizCategorySchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String
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

module.exports = mongoose.model('QuizCategory', quizCategorySchema)
