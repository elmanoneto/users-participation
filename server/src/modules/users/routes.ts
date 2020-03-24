import { Router } from 'express'
import UsersController from './controllers/users.controller'

const userRouter: Router = Router()
const usersController: UsersController = new UsersController()

const ROUTER_NAME = '/users'

userRouter.get(ROUTER_NAME, usersController.index)
userRouter.post(ROUTER_NAME, usersController.create)

export default userRouter