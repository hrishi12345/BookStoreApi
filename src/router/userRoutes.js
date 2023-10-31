import express from 'express'

import { signup,login } from '../controller/userController.js'

const router=express.Router()
router.post('/createUser',signup)
router.post('/loginUser',login)

export default router