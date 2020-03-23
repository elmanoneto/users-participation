
import "reflect-metadata"
import typeorm, { getConnectionManager, ConnectionManager, Connection } from 'typeorm'

class DataBase {
    private connection: ConnectionManager

    constructor () {
        this.connection = new ConnectionManager()
        this.connect()
        this.getConnection()
    }

    private async connect() {
        try {
            const connection = await this.connection
            .create({
                name: 'users-participation',
                type: 'mongodb',
                host: 'localhost',
                port: 27017,
                database: 'users',
                logging: true,
                useUnifiedTopology: true
            })
            .connect()

            return connection
        } catch (error) {
            console.log(`Cannot connect: ${error}`)
        }
    }

    private getConnection () {
        console.log(this.connection.has('users-participation'))
    }
}

export default DataBase