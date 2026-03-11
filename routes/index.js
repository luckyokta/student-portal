const express = require('express')
const { UserController, StudentController } = require('../controllers')
const { authentication, authorization } = require('../middlewares/auth')
const router = express.Router()

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.use(authentication)

router.get('/', StudentController.find)

router.get('/:id', StudentController.findById)

router.post('/', StudentController.create)

router.put('/:id', authorization, StudentController.update)

router.delete('/:id', authorization, StudentController.delete)

module.exports = router