import mongoose, {model, Schema} from "mongoose";

// mongooese.connect laater on //
//late move it on .evn 
//mongoose.connect("mongodb+srv://ashishnitro5:aSxxxxxxxxxx8@cluster0.ldjsp.mongodb.net/IdeaCore");

const UserSchema = new Schema({
    username: { type: String, unique: true, required:true,},
    password: { type: String, required: true,},

})
export const UserModel = model("User", UserSchema);

//

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},

})

//3

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref:'User', required: true, unique:true},
})


// All the export links below it

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);


