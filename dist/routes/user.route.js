"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express.Router();
const user_validation_1 = __importDefault(require("../middlewares/user.validation"));
router.post("/create", user_validation_1.default.userValidation, user_controller_1.default.createUser);
router.get("/getdata", user_controller_1.default.getAllUser);
router.put("/update/:id", user_validation_1.default.updateUserValidation, user_controller_1.default.upDateData);
router.delete("/delete/:id", user_controller_1.default.getDelete);
exports.default = router;
