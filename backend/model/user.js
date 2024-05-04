import mongoose from "mongoose"

import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: [true, 'Please enter your name']
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true
    },
    account: {
        type: String,
        default: 0
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minLength: [6, "Your password must be longer than 6 charactors"]
    },
    role: {
        type: String,
        default: "user"
    },
    status: {
        type: String,
        default: "false"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.models.User || mongoose.model("User", userSchema)


