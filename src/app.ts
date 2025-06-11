// const express = require('express')

import express, { Application, NextFunction, Request, Response } from 'express' //esm module
import path from 'path'
import { todosRouter } from './app/todos/todos.routes';
// import cors from 'cors';

const filename = path.join(__dirname, '../db/todo.json')
const app: Application = express()
// app.use(cors());
app.use(express.json())
const userRouter = express.Router()

app.use('/todos', todosRouter)
app.use('/users', userRouter)



app.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(something)
        res.send('Welcome todos app')
    } catch (error) {
        next(error)
    }
})

app.get('/error', async (req, res, next) => {
    try {
        console.log('from error router', something)
        res.send('from error router')
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'something went wrong' })
    }
})

// missing route handler
app.use((req : Request, res : Response, next : NextFunction)=>{
    res.status(404).json({message : 'route not found'})
})

// global error handler
app.use((error : any, req : Request ,res : Response , next : NextFunction)=>{
    if(error){
        console.log('error from global', error)
        res.status(400).json({message : 'global error handler'})
    } 
})


export default app