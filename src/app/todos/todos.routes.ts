import express, { Application, Request, Response } from 'express'
import { client } from '../../config/mongodb'
import { ObjectId } from 'mongodb'

const app: Application = express()
app.use(express.json())

export const todosRouter = express.Router()

// get all data
todosRouter.get('/', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const result = await dbCollection.find({}).toArray()
    res.json(result)
})

// get specific data
todosRouter.get('/:id', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const id = req.params.id

    const query = { _id: new ObjectId(id) }
    const result = await dbCollection.findOne(query)
    res.json(result)

    // const data = fs.readFileSync(filename, 'utf-8')
    // res.send({
    //     message: 'hello from params section',
    //     data
    // })
});

todosRouter.post('/create', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const { title, description, priority } = req.body;

    await dbCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    })

    const result = await dbCollection.find({}).toArray()
    res.json(result)
})

todosRouter.put('/update/:id', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const id = req.params.id
    const query = { _id: new ObjectId(id) }

    const { title, description, priority, isCompleted } = req.body
    const updateTodo = await dbCollection.updateOne(
        query,
        { $set: { title, description, priority, isCompleted } },
        { upsert: true }
    )

    res.send(updateTodo)
})

todosRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const dbCollection = client.db('L2-todosDB').collection('todos')
    const id = req.params.id;

    const query = { _id: new ObjectId(id) }
    const result = await dbCollection.deleteOne(query)
    res.json(result)
})

// 