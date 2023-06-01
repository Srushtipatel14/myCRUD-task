import { DataTypes, Model } from "sequelize";
import sequelize from "../configs/db.config";

const User= sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.sync().then(()=>{
    console.log("user model synced");
})

module.exports=User;