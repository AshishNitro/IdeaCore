import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./db";

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
            message: "You are sifned up"
        })
        }
        catch(e) {
            res.status(411).json ({
                message: "you alread have an account"
            })
        }
})


app.post("/api/v1/signin", (req, res) =>{
    
})

app.post("/api/v1/content", (req, res) =>{
    
})

app.get("/api/v1/content", (req, res) =>{
    
})

app.delete("/api/v1/content", (req, res) =>{
    
})

app.listen(2002);