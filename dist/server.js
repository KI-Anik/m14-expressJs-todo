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
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const mongodb_1 = require("./config/mongodb");
const port = process.env.PORT || 5000;
let server;
const bootStrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongodb_1.client.connect();
    console.log('connected to mongoDB');
    // testing for send data --> database
    // const dbCollection = await client.db('L2-todosDB').collection('todos')
    // const data = await dbCollection.insertOne({
    //     title : 'prisma'
    // })
    // console.log(data)
    server = app_1.default.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
});
bootStrap();
