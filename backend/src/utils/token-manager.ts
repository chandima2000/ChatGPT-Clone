import jwt from "jsonwebtoken";
import {Request,Response,NextFunction} from "express";
import { COOKIE_NAME } from "./constant.js";

export const createToken = (id : string, email:string, expiresIn:string) => {

    const payload = {id,email};
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn,
    });

    return token;
}

export const verifyToken = async (
    req:Request,
    res:Response,
    next:NextFunction
    ) => {
        const token = req.signedCookies[`${COOKIE_NAME}`];
        if(!token || token.trim() ===""){
            return res.status(404).json({message:"Token not Received"});
        }
        return new Promise<void>((resolve,reject)=>{
            return jwt.verify(token,process.env.JWT_SECRET,(err,successs)=>{
                    if(err){
                        reject(err.message);
                        return res.status(401).json({message:"Token is Expired"})
                    }else{
                        resolve();
                        res.locals.jwtData = successs;
                        return next();
                    }
            });
        });
    };