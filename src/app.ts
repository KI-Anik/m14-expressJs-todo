// const express = require('express')

import express, { Application, Request, Response } from 'express' //esm module
import fs from "fs";
import path from 'path'
import { todosRouter } from './app/todos/todos.routes';

const filename = path.join(__dirname, '../db/todo.json')
const app: Application = express()
app.use(express.json())
const userRouter = express.Router()

app.use('/todos', todosRouter)
app.use('/users', userRouter)



app.get('/', (req: Request, res: Response) => {
    res.send('Welcome todos app')
})



export default app