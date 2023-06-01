"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const db_config_1 = __importDefault(require("./configs/db.config"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/user", user_route_1.default);
app.listen(port, () => {
    console.log(`your program is running on port number ${port}`);
});
const testDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_config_1.default.authenticate();
        console.log("Connection has been established successfully");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
testDbConnection();
