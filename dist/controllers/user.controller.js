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
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const finaluser = req.body;
                const storeData = yield user_service_1.default.createUser(finaluser);
                res.status(200).json(storeData);
            }
            catch (error) {
                console.log("invalid data:", error);
                res.status(400).json({ error: "Internal server error" });
            }
        });
    }
    getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getData = yield user_service_1.default.getAllUser();
                console.log("all data view here");
                console.log(getData);
                res.json(getData);
            }
            catch (error) {
                console.log("invalid data", error);
                res.status(400).json({ error: "internal server error.." });
            }
        });
    }
    getDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = Number(req.params.id);
                const deleteData = yield user_service_1.default.getDelete(userId);
                res.json({ message: "delete successfully.." });
            }
            catch (error) {
                console.log("invalid data", error);
                res.status(400).json({ error: "internal server error" });
            }
        });
    }
    upDateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = Number(req.params.id);
                const userdata = req.body;
                const newdata = yield user_service_1.default.upDateData(userId, userdata);
                console.log(newdata);
                res.json({ message: "update successfully.." });
            }
            catch (error) {
                console.log("internal server error", error);
                res.status(400).json({ error: "internal server error" });
            }
        });
    }
}
exports.default = new UserController();
