"use strict";
// const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //esm module
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./app/todos/todos.routes");
const filename = path_1.default.join(__dirname, '../db/todo.json');
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use('/todos', todos_routes_1.todosRouter);
app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.send('Welcome todos app');
});
exports.default = app;
