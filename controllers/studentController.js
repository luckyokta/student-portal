const { Student } = require('../models')

const StudentController = {
    find: (req, res, next) => {
        Student.find({})
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            next(err)
        })
    },
    findById: (req, res, next) => {
        Student.findById(req.params.id)
        .then(student => {
            res.json(student)
        })
        .catch(err => {
            next(err)
        })
    },
    create: (req, res, next) => {
        // kenapa pake let?
        let { name, dateOfBirth, studentNumber, email, department, courses } = req.body
        let userId = req.userId

        Student.create({ name, dateOfBirth, studentNumber, email, department, courses, userId })
        .then(student => {
            res.json(student)
        })
        .catch(err => {
            next(err)
        })
    },
    update: (req, res, next) => {
        let { name, dateOfBirth, studentNumber, email, department, courses } = req.body
        
        Student.findByIdAndUpdate(req.params.id, { name, dateOfBirth, studentNumber, email, department, courses }, { new: true }) // new: true -> return the updated document
        .then(student => {
            res.json(student)
        })
        .catch(err => {
            next(err)
        })
    },
    delete: (req, res, next) => {
        Student.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: `student with id ${req.params.id} has been deleted`})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = StudentController