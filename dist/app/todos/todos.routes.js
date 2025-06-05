"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
exports.todosRouter.post('/create', (req, res) => {
    const { title, body } = req.body;
    res.send('new post created');
});
exports.todosRouter.put('/update/:title', (req, res) => {
});
exports.todosRouter.delete('/delete/:titile', (req, res) => {
});
