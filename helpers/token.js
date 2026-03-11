const jwt = require('jsonwebtoken')
const secret = 'secret'

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret)
    return token
}

const decodedToken = (payload) => {
    const decoded = jwt.verify(payload, secret)
    return decoded
}

module.exports = { generateToken, decodedToken }