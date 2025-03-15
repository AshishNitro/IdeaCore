import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import { ContentModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config"
import { useMiddleware } from "./middleware";


const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) =>{
    
    const username = req.body.username;
    const password = req.body.password ;

    try{
        await UserModel.create({
            username: username,
            password: password,

        })
        res.json({
            message: "You are in "
        })
        }
        catch(e) {
            res.status(411).json ({
                message: "you alread have an account!"
            })
        }
})


app.post("/api/v1/signin", async (req, res) =>{
    const { username, password,} = req.body;
    
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentils"
        })
    }

})

app.post("/api/v1/content",  useMiddleware, async (req, res) =>{
    const link = req.body.Link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added"
    })


    
})

app.get("/api/v1/content",useMiddleware, async (req, res) =>{
    //@ts-ignore
   const userId = req.userId;
    
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
    
})

app.delete("/api/v1/content", async (req, res) =>{
    const contentId =req.body.contentId;
     
    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId

     })
     res.json({
        message: "Deleted"
     })
    
})

app.listen(2002);
