import mongoose from "mongoose"

//Schema para documento aninhado da Opening
const openingSchema = new mongoose.Schema({ 
    music_name: String,
    anime_name: String,
    duration: String,
    launch: Number,
    band: String,
    season_music: Number
}) 

//Criando um schema
const animeSchema = new mongoose.Schema({
    title: String,
    number_seasons: Number,
    gender: String,
    studio: String,
    opening: [openingSchema],
    description: String
})

// Criando um model, ele precisa receber o schema (o nome "Anime" esta recebendo o schema) 
const Anime = mongoose.model('Anime', animeSchema)

export default Anime