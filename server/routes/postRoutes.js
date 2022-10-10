import { Router } from 'express'
import {getMe, login, register} from "../controllers/auth.js";
import {checkAuth} from "../utils/checkAuth.js";
import {createPost} from "../controllers/posts.js";

const router = new Router()

//Create Post
router.post('/', checkAuth, createPost)



export default router
