"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var db_config_1 = require("./configs/db.config");
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("your program is running on port number ".concat(port));
    db_config_1.default.authenticate().then(function () {
        console.log("database connected successfully..");
    }).catch(function (error) {
        console.log(error);
    });
});
