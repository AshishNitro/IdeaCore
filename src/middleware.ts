import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD} from "./config";



export const useMiddleware = (req: Request, res:Response, next:NextFunction) =>{
      const header = req.headers["authorization"];
      const decoded = jwt.verify(header as string, JWT_PASSWORD)
      if(decoded){
        if(typeof decoded === "string") {
            res.status(403).json({
                message: "you are not logged in "
            })
            return ;
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next();
        
      } else{
        res.status(403).json({
            message: "you are not logged in"
        })
      }
    
}