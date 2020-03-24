import mongoose from 'mongoose'
import User, { IUSer } from '../src/modules/users/models/user.model'

describe('User model', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    })

    afterAll(async () => {
        const UserModel = await new User()
        await UserModel.collection.drop()
        mongoose.connection.close()
    })

    it('Should throw validation errors', async done => {
        const UserModel: IUSer = await new User()

        expect(UserModel.validate).toThrow()

        done()
    })

    it('Should save user to database', async done => {
        expect.assertions(3)

        const UserModel: IUSer = await new User({ firstName: 'John', lastName: 'Snow', participation: 10 })

        const spy = jest.spyOn(UserModel, 'save')
        UserModel.save()

        expect(spy).toHaveBeenCalled()

        expect(UserModel).toMatchObject({
            firstName: 'John',
            lastName: 'Snow',
            participation: 10
        })

        expect(UserModel.participation).toBe(10)

        done()
    })
})