import { Router } from 'express'
import { signup, login, postLogin, postSignup } from '../controllers/authentication.controllers.js'
const router = Router()

router.get('/signup', signup)
router.get('/login', login)

router.post('/signup', postSignup)
router.post('/login', postLogin)

export default router
