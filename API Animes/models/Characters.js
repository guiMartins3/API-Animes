import mongoose from "mongoose"   

//Criando um schema  
const charactersSchema = new mongoose.Schema({  
    name_character: String, 
    years_old: Number, 
    country_origin: String, 
    anime_origin: String, 
    signature_skill: String 
})  

// Criando um model, ele precisa receber o schema (o nome "Characters" esta recebendo o schema)   
const Characters = mongoose.model('Characters', charactersSchema)  

export default Characters