
import userService from "../services/user.service";
import { Request, Response } from "express";

class UserController{

async createUser  (req: Request, res: Response)  {

    try {
        
         const finaluser=req.body;
        const storeData= await userService.createUser(finaluser);
        res.status(200).json(storeData);

       
    } catch (error) {

        console.log("invalid data:", error);
        res.status(400).json({ error: "Internal server error" });

    }

}

async getAllUser(req:Request,res:Response){
    try {

        const getData=await userService.getAllUser();
        console.log("all data view here");
        console.log(getData);
        res.json(getData);
        
    } catch (error) {

        console.log("invalid data",error);
        res.status(400).json({error:"internal server error.."});
        
    }
}

async getDelete(req:Request,res:Response){

    try {

        const userId=Number(req.params.id);
        const deleteData=await userService.getDelete(userId); 
        
        res.json({message:"delete successfully.."});
        
    } catch (error) {

        console.log("invalid data",error);
        res.status(400).json({error:"internal server error"});
        
    }

}

async upDateData(req:Request,res:Response){
    try {

        const userId=Number(req.params.id);
        const userdata=req.body;
        const newdata= await userService.upDateData(userId,userdata);
        console.log(newdata)
        res.json({message:"update successfully.."});

        
    } catch (error) {

        console.log("internal server error" ,error);
        res.status(400).json({error:"internal server error"});
        
    }
}

}

export default new  UserController();