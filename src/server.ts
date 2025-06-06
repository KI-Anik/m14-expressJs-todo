import 'dotenv/config'
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
const port = process.env.PORT || 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eko35.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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