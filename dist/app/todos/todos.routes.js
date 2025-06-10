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
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = mongodb_1.client.db('L2-todosDB').collection('todos');
    const result = yield dbCollection.find({}).toArray();
    res.json(result);
}));
exports.todosRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = mongodb_1.client.db('L2-todosDB').collection('todos');
    const id = req.params.id;
    const query = { _id: new mongodb_2.ObjectId(id) };
    const result = yield dbCollection.findOne(query);
    res.json(result);
    // const data = fs.readFileSync(filename, 'utf-8')
    // res.send({
    //     message: 'hello from params section',
    //     data
    // })
}));
exports.todosRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = mongodb_1.client.db('L2-todosDB').collection('todos');
    const { title, description, priority } = req.body;
    yield dbCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    });
    const cursor = yield dbCollection.find({}).toArray();
    res.json(cursor);
}));
exports.todosRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = mongodb_1.client.db('L2-todosDB').collection('todos');
    const id = req.params.id;
    const query = { _id: new mongodb_2.ObjectId(id) };
    const { title, description, priority, isCompleted } = req.body;
    const updateTodo = yield dbCollection.updateOne(query, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.send(updateTodo);
}));
exports.todosRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbCollection = mongodb_1.client.db('L2-todosDB').collection('todos');
    const id = req.params.id;
    const query = { _id: new mongodb_2.ObjectId(id) };
    const result = yield dbCollection.deleteOne(query);
    res.json(result);
}));
// 
