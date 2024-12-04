import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    list: [{type: String}]
}, {versionKey: false, strictQuery: true})

UserSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user._id;
    return user;
  }

const User = model("User", UserSchema)

export default User;