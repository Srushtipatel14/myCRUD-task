const User = require("../models/user");
const bcrypt =require("bcryptjs");

class userService{

    async createUser (userdata:any){
        
    
            const newUser=await User.findOne({where:{email:userdata.email}});

            if(newUser){

                return{status:"success",message:"already exist this user"}

            }


            // const securePassword= async(password:string)=>{
                const salt= await bcrypt.genSalt(12);
                const hashPassword= await bcrypt.hash(userdata.password,salt);
                // return hashPassword;
            // }
            
           // const passwordhash= await securePassword(userdata.password);

            User.create({
                name:userdata.name,
                email:userdata.email,
                password:hashPassword,

            });
            return{status:"success",message:"user data added successfully"};
    }
    
    async getAllUser(): Promise<any>{

        return await User.findAll();

    }


    async getDelete(id:number):Promise<any>{
         await User.destroy({where:{id}});
         
    }
   

    async upDateData(id:number,userdata:any):Promise<any>{
     return await User.update(userdata,{where:{id:id}});

     
    }




}



export default new userService();
