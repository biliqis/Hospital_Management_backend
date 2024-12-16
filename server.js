import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from './config/db.js'


const app = express()
const port = process.env.PORT ||3000

connectDB()

app.use(express.json())

app.use(cors())


app.get('/', (req, res)=>{

    res.send('API WORKING')

})


app.listen(port, ()=>console.log('server is up and running', port))