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
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user");
const bcrypt = require("bcryptjs");
class userService {
    createUser(userdata) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield User.findOne({ where: { email: userdata.email } });
            if (newUser) {
                return { status: "success", message: "already exist this user" };
            }
            // const securePassword= async(password:string)=>{
            const salt = yield bcrypt.genSalt(12);
            const hashPassword = yield bcrypt.hash(userdata.password, salt);
            // return hashPassword;
            // }
            // const passwordhash= await securePassword(userdata.password);
            User.create({
                name: userdata.name,
                email: userdata.email,
                password: hashPassword,
            });
            return { status: "success", message: "user data added successfully" };
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findAll();
        });
    }
    getDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User.destroy({ where: { id } });
        });
    }
    upDateData(id, userdata) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.update(userdata, { where: { id: id } });
        });
    }
}
exports.default = new userService();
