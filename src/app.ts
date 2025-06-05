// const express = require('express')

import express, { Application, Request, Response } from 'express' //esm module
import fs from "fs";
import path from 'path'

const filename = path.join(__dirname, '../db/todo.json')
const app: Application = express()
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome todos app')
})

app.get('/todos/:id', (req: Request, res: Response) => {
    const query = req.query
    console.log( 'from query',query)

    const params = req.params
    console.log('form params',params)
    
    const data = fs.readFileSync(filename, 'utf-8')
    res.json(data)
})

app.post('/todos/create' , (req : Request, res : Response)=>{
    const {title, body} = req.body;
    console.log({title})
    res.send('new data created')
})



export default app