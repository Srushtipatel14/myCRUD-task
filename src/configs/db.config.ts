import { Sequelize } from "sequelize";
const dotenv= require("dotenv");

dotenv.config();

const sequelize=new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect:"postgres"
});

export default sequelize;
