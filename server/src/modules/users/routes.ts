import { Router } from 'express'
import UsersController from './controllers/users.controller'

const userRouter: Router = Router()
const usersController: UsersController = new UsersController()

userRouter.get('/users', usersController.index)
userRouter.post('/users', usersController.create)

export default userRouter