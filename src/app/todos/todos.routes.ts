import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { client } from '../../config/mongodb'

const filename = path.join(__dirname, '../../../db/todo.json')
const app: Application = express()
app.use(express.json())

export const todosRouter = express.Router()

todosRouter.get('/', (req: Request, res: Response) => {
    res.send('welcome to todosRouter')
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
    const dbCollection = await client.db('L2-todosDB').collection('todos')
    const newPost = await dbCollection.insertOne({
        title : 'mongodb',
        description : 'hey there, i am learning mongoDB',
        priority: 'medium',
        isCompleted : true
    })
   console.log('new post created')
    res.json(newPost)
})

todosRouter.put('/update/:title', (req: Request, res: Response) => {

})

todosRouter.delete('/delete/:titile', (req: Request, res: Response) => {

})

// 