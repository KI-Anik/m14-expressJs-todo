// const express = require('express')

import express, { Application, Request, Response } from 'express' //esm module
import path from 'path'
import { todosRouter } from './app/todos/todos.routes';
import cors from 'cors';

const filename = path.join(__dirname, '../db/todo.json')
const app: Application = express()
app.use(cors());
app.use(express.json())
const userRouter = express.Router()

app.use('/todos', todosRouter)
app.use('/users', userRouter)



app.get('/', (req: Request, res: Response) => {
    res.send('Welcome todos app')
})



export default app