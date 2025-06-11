"use strict";
// const express = require('express')
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
const express_1 = __importDefault(require("express")); //esm module
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./app/todos/todos.routes");
// import cors from 'cors';
const filename = path_1.default.join(__dirname, '../db/todo.json');
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use('/todos', todos_routes_1.todosRouter);
app.use('/users', userRouter);
app.get('/', (req, res, next) => {
    try {
        console.log(something);
        res.send('Welcome todos app');
    }
    catch (error) {
        next(error);
    }
});
app.get('/error', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('from error router', something);
        res.send('from error router');
    }
    catch (error) {
        console.log('error', error);
        res.status(400).json({ message: 'something went wrong' });
    }
}));
// missing route handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'route not found' });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log('error from global', error);
        res.status(400).json({ message: 'global error handler' });
    }
});
exports.default = app;
