import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { client } from '../../config/mongodb'

const filename = path.join(__dirname, '../../../db/todo.json')
const app: Application = express()
app.use(express.json())

export const todosRouter = express.Router()

todosRouter.get('/', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const cursor = await dbCollection.find().toArray()
    res.json(cursor)
})

todosRouter.get('/:titile', (req: Request, res: Response) => {
    const params = req.params
    console.log(params)

    const data = fs.readFileSync(filename, 'utf-8')
    res.send({
        message: 'hello from params section',
        data
    })
});

todosRouter.post('/create', async (req: Request, res: Response) => {
    const { title, description, priority } = req.body;

    const dbCollection = client.db('L2-todosDB').collection('todos')
    const newPost = await dbCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    })

    const cursor = await dbCollection.find({}).toArray()
    res.json(cursor)
})

todosRouter.put('/update/:title', (req: Request, res: Response) => {

})

todosRouter.delete('/delete/:titile', (req: Request, res: Response) => {

})

// 