const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, 'Please add a comanyName'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    tel: {
      type: String,
      required: [true, 'Please add a tel'],
    },
    adress: {
      type: String,
      required: [true, 'Please add a adress'],
    },
    lont: {
      type: Number,
      required: [true, 'Please add a adress'],
    },
    lat: {
      type: Number,
      required: [true, 'Please add a adress'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Company', companySchema)
