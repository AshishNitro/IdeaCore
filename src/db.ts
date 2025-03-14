import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
// will connect too database lateronn
mongoose.connect("mongodb://localhost:27017/IdeaCore");




//  User Schema
const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);


const ContentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    type: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);


const LinkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true },
});

export const LinkModel = model("Links", LinkSchema);



