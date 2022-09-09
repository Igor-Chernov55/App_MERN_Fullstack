import  express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.ts'

// Результат выполнения функции Express
const app = express()

// конфиг необходим для шифровки данных mongoose
dotenv.config()

// CONST env
const POST = process.env.POST || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// middleware необходим для corsa(подключение с разных ip адресов)
app.use(cors())
//необходим для принятия данных в формате json
app.use(express.json())

// Routes
app.use('/api/auth', authRoute)

async function start(){
    try {
        //mongoose url для подключения
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hmypygl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        // Запускаем приложение
        app.listen(POST, () => {
            console.log(`server started on port: ${POST}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
