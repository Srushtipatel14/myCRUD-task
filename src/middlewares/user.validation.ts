const joi=require("joi");
const User = require("../models/user");
import { Request,Response } from "express";


const createValidation =joi.object({
    name:joi.string().alphanum().min(3).max(25).trim(true).required(),
    email:joi.string().email().trim(true).required(),
    password:joi.string().length(6).trim(true).required(),
});

const updateValidation =joi.object({
    name:joi.string().min(3).max(25).trim(true).required(),
    email:joi.string().email().trim(true).required(),
    password:joi.string().length(6).trim(true).required(),
});

class validation{

    async userValidation(req:Request,res:Response,next:any){

        const payload={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        };

        const {error}=createValidation.validate(payload);
        if(error){
            return res.json({message:`your error is ${error.message}`})
        }

        else{
            next();
        }

    }

    async updateUserValidation(req:Request,res:Response,next:any){
        const payload= {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        };

        const {error} = updateValidation.validate(payload);
        if(error){
            return res.json({message:`your error is ${error.message}`})
        }
        else{
            next();
        }
    }
}


export default new validation();