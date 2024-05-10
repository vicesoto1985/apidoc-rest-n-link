import express from "express"
import swaggerUi from 'swagger-ui-express'
import { readFile } from 'node:fs/promises';
const swaggerDocument = JSON.parse( await readFile(process.cwd()+'/swagger.json', 'utf8') )

const app = express()
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next)=>{
    res.status(404).json({
        message : "endpoint not found"
    })
});

app.use((err, req, res, large)=>{

    res.status(err.status).json({
        message : `Error: ${err.message}`
    })    
})

app.listen(3101, ()=>{
    console.log("Server Iniciado en el IP:PUERTO: 127.0.0.1:3101");
})