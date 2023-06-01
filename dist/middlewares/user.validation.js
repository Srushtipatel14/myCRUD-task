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
const joi = require("joi");
const User = require("../models/user");
const createValidation = joi.object({
    name: joi.string().alphanum().min(3).max(25).trim(true).required(),
    email: joi.string().email().trim(true).required(),
    password: joi.string().length(6).trim(true).required(),
});
const updateValidation = joi.object({
    name: joi.string().min(3).max(25).trim(true).required(),
    email: joi.string().email().trim(true).required(),
    password: joi.string().length(6).trim(true).required(),
});
class validation {
    userValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };
            const { error } = createValidation.validate(payload);
            if (error) {
                return res.json({ message: `your error is ${error.message}` });
            }
            else {
                next();
            }
        });
    }
    updateUserValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };
            const { error } = updateValidation.validate(payload);
            if (error) {
                return res.json({ message: `your error is ${error.message}` });
            }
            else {
                next();
            }
        });
    }
}
exports.default = new validation();
