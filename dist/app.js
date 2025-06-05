"use strict";
// const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //esm module
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filename = path_1.default.join(__dirname, '../db/todo.json');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Welcome todos app');
});
app.get('/todos/:id', (req, res) => {
    const query = req.query;
    console.log('from query', query);
    const params = req.params;
    console.log('form params', params);
    const data = fs_1.default.readFileSync(filename, 'utf-8');
    res.json(data);
});
app.post('/todos/create', (req, res) => {
    const { title, body } = req.body;
    console.log({ title });
    res.send('new data created');
});
exports.default = app;
