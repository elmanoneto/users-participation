import { Request, Response } from 'express'

import User, { IUSer } from '../models/user.model'

class UsersController {

    async index(req: Request, res: Response) {
        try {
            const UserModel: IUSer = new User()
            const users = await UserModel.collection.find({}).toArray()
            res.json(users)
        } catch (error) {
            res.status(422).send({ status: 422, data: error.message })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const UserModel: IUSer = new User(req.body)
            UserModel.validateSync()
            await UserModel.save()
            res.json({ status: 200, data: UserModel.toJSON() })
        } catch (error) {
           res.status(400).send({ code: 400, error: error })
        }
    }

}

export default UsersController 