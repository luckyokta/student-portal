const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const StudentSchema = new Schema({
    id: ObjectId,
    name: String,
    dateOfBirth: Date,
    studentNumber: {
        type: Number,
        unique: true
    },
    email: String,
    department: String,
    courses: [String],
    userId: String
}, { timestamps: true })

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student