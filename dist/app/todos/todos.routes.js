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
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
const filename = path_1.default.join(__dirname, '../../../db/todo.json');
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => {
    res.send('welcome to todosRouter');
});
exports.todosRouter.get('/:titile', (req, res) => {
    const params = req.params;
    console.log(params);
    const data = fs_1.default.readFileSync(filename, 'utf-8');
    res.send({
        message: 'hello from params section',
        data
    });
});
exports.todosRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = yield mongodb_1.client.db('L2-todosDB').collection('todos');
    const newPost = yield dbCollection.insertOne({
        title: 'mongodb',
        description: 'hey there, i am learning mongoDB',
        priority: 'medium',
        isCompleted: true
    });
    console.log('new post created');
    res.json(newPost);
}));
exports.todosRouter.put('/update/:title', (req, res) => {
});
exports.todosRouter.delete('/delete/:titile', (req, res) => {
});
// 
