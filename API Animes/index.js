import express from "express" 
//import mongoose from "mongoose" 
import Anime from "./models/Animes.js"
import animeRoutes from "./routes/animeRoutes.js"
import characterRoutes from "./routes/characterRoutes.js"
import mongoose from "./config/db-connection.js";

const app = express() 

//Configurações do Express 
app.use(express.urlencoded({extended:false})) 
app.use(express.json())
app.use("/", animeRoutes)
app.use("/", characterRoutes)

//Rodando a API na porta 4000 
const port = 4000 

app.listen(port,(error) => { 
    if(error){ 
        console.log(error) 
    } 
    console.log(`API rodando em http://localhost:${port}.`) 
}) 

//Conxão com o mongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api-animes") 