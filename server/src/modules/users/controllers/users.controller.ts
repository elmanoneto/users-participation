import { Request, Response } from 'express'

import User, { IUSer } from '../models/user.model'

class UsersController {

    async index(req: Request, res: Response) {
        try {
            const user: IUSer = new User()
            const result = await user.collection.find({}).toArray()
            res.json({ status: 200, data: result })
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    async create(req: Request, res: Response) {
        const user: IUSer = new User({ firstName: 'Elmano', lastName: 'Neto', participation: 10 })
        user.save()
        res.json({ status: 200, data: user.toJSON() })
    }

}

export default new UsersController()