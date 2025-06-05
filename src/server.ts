import app from "./app";

let server;
const port = 5000

const bootStrap = async ()=>{
    server = app.listen(port,  ()=>{
        console.log(`server listening on port ${port}`)
    })
}

bootStrap()