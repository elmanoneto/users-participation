
import mongoose from 'mongoose'

class DataBase {

    private DB_URI: string = 'mongodb://localhost:27017/users'

    constructor () {}

    public async connect () {
        try {
            await mongoose.connect(this.DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    public async close () {
        try {
            await mongoose.disconnect()
        } catch (error) {
            console.log(error)
        }
    }
}

export default DataBase