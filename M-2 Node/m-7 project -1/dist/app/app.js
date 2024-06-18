"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
//middle ware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.cookies, req.ip);
    next();
};
app.get('/', logger, (req, res, next) => {
    try {
        res.send('ksad');
    }
    catch (error) {
        next(error);
    }
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('got data');
});
//global error handleer
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('khaise re');
});
// not found url 
app.all("*", (req, res) => {
    res.status(404).send("not found");
});
exports.default = app;
