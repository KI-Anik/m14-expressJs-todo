import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

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

todosRouter.post('/create', (req: Request, res: Response) => {
    const { title, body } = req.body

    res.send('new post created')
})

todosRouter.put('/update/:title', (req: Request, res: Response) => {

})

todosRouter.delete('/delete/:titile', (req: Request, res: Response) => {

})

// 