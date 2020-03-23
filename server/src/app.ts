import express, { Request, Response } from 'express'
import { createConnection, Connection } from 'typeorm'
import morgan from 'morgan'
import cors from 'cors'

import DataBase from './config/database'

class App {
    public app: express.Application
    private database: DataBase

    constructor() {
        this.app = express()
        this.database = new DataBase()

        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    private routes() {
        this.app.get('/', (req: Request, resp: Response) => {
            return resp.json({ msg: 'Hello World!' })
        })
    }

    public listen() {
        this.app.listen(3333)
    }
}

export default App