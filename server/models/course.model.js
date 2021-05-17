const mongoose = require("mongoose");
const { model} = require("mongoose")

const LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    resource_url: String

})
const Lesson = mongoose.model('Lesson', LessonSchema)

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: String,
        required: 'Category is required'
    },
    published: {
        type: Boolean,
        default: false
    },
    instructor:{
        type: mongoose.Schema.ObjectId, ref: 'User'
    },
    lessons : [LessonSchema],
    created:{
        type: Date,
        default: Date.now
    },
    updated: Date

})
module.exports = model('Course', CourseSchema)