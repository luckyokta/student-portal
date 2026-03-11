const { decodedToken } = require('../helpers/token')
const { Student } = require('../models')

// cek sudah login atau belum
const authentication = (req, res, next) => {
    // cek req-nya mengandung token atau tidak
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = decodedToken(token)

        req.userId = decoded.id
        next()
    } catch(error) {
        next({ message: 'You should login', status: 401})
    }
}

const authorization = (req, res, next) => {
    // cocokkan apakah userId di student sama dengan userId di req-nya
    Student.findById(req.params.id)
    .then(student => {
        if(student.userId == req.userId) {
            next()
        } else {
            next({ message: 'You are not allowed', status: 401 })
        }
    })
    .catch(err => {
        next({ message: 'You are not allowed', status: 401 })
    })
}

module.exports = { authentication, authorization }