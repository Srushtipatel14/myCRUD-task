require("dotenv").config();
import sequelize from "./configs/db.config";
import router from "./routes/user.route";
const express= require("express");
const app=express();
const port=process.env.PORT||3000;


app.use(express.json());

app.use("/user",router);

app.listen(port,()=>{

    console.log(`your program is running on port number ${port}`);
   
})

const testDbConnection=async()=>{

    try {

        await sequelize.authenticate();
        console.log("Connection has been established successfully")
        
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

testDbConnection();

