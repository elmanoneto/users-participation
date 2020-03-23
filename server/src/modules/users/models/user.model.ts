import mongoose, { Document, Schema } from 'mongoose'

export interface IUSer extends Document {
    firstName: string,
    lastName: string,
    participation: number
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    participation: { type: Number, required: true }
})

export default mongoose.model<IUSer>('User', UserSchema)