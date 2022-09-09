import { Router } from 'express'
import {getMe, login, register} from "../controllers/auth";

const router = new Router()

// Register
router.post('/register', register)

//Login
router.post('/login', login)

//Get me
router.get('/me', getMe)

export default router
