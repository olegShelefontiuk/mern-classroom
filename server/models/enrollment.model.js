const mongoose = require("mongoose");
const { model} = require("mongoose")

const EnrollmentSchema = new mongoose.Schema({
  course: {type: mongoose.Schema.ObjectId, ref: 'Course'},
  updated: Date,
  enrolled: {
    type: Date,
    default: Date.now
  },
  student: {type: mongoose.Schema.ObjectId, ref: 'User'},
  lessonStatus: [{
      lesson: {type: mongoose.Schema.ObjectId, ref: 'Lesson'}, 
      complete: Boolean}],
  completed: Date
})

module.exports = model('Enrollment', EnrollmentSchema)
