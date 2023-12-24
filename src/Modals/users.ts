import mongoose, {Document, Schema} from 'mongoose';

interface User extends Document{
    userName : String,
    email : String,
    password : String,
    isAdmin : Boolean
}

const userSchema = new Schema<User>({
    userName : {
        type : String,
        required : true,
        unique : false
    },
    email : {
        type : String,
        required : true,
        unique : false
    },
    password : {
        type : String,
        required : true,
        unique : false
    },
    isAdmin : {
        type : Boolean,
        required : true,
        unique : false
    }
})

export const User_Model = mongoose.model<User>('user', userSchema);