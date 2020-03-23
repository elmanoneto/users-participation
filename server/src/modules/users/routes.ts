import { Router } from 'express'
import UsersController from './controllers/users.controller'

const userRouter: Router = Router()

userRouter.get('/users', UsersController.index)
userRouter.post('/users', UsersController.create)

export default userRouter