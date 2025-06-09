import 'dotenv/config'
import app from "./app";
import { client } from './config/mongodb';
const port = process.env.PORT || 5000

let server;
const bootStrap = async ()=>{
    await client.connect();
    console.log('connected to mongoDB')

    // testing for send data --> database
    // const dbCollection = await client.db('L2-todosDB').collection('todos')
    // const data = await dbCollection.insertOne({
    //     title : 'prisma'
    // })
    // console.log(data)

    server = app.listen(port,  ()=>{
        console.log(`server listening on port ${port}`)
    })
}

bootStrap()