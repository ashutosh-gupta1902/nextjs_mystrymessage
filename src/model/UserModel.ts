import mongoose, { Schema, Document, Mongoose, mongo } from "mongoose"; //Document for type safety only for typescript

export interface Message extends Document {

    content: string; //s is small in TypeScript
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({

    content: {
        type: String, //S is capitalize in mongoose
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})


// User

export interface User extends Document {

    username: string; //s is small in TypeScript
    email: string;
    password: string;
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({

    username: {
        type: String, //S is capitalize in mongoose
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, 'Please use a valid email address'] // regex use for email validation "/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/"
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||
    (mongoose.model<User>("User", UserSchema))

export default UserModel;
