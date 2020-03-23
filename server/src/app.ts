import express, { Request, Response } from 'express'
import { createConnection } from 'typeorm'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import DataBase from './config/database'
import userRouter from './modules/users/routes'


class App {
    public app: express.Application
    public database: DataBase

    constructor() {
        this.app = express()
        this.database = new DataBase()

        this.database.connect()
        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(morgan('dev'))
    }

    private routes() {
        this.app.use(userRouter)
    }

    public listen() {
        this.app.listen(3333)
    }
}

export default App