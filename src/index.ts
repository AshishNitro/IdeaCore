import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) =>{
    
    const username = req.body.username;
    const password = req.body.password ;

    try{
        
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