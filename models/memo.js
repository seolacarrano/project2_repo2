const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memoSchema = new Schema(
    {
      title: {type:String, required: false},
      date: {type: Date, required: true},
      note: {type: String, required: true},
      image: [{
          type: Schema.Types.ObjectId,
          ref: 'Record'
      }]
    },
    {timestamps: false}
)

module.exports = mongoose.model('Memo', artistSchema)