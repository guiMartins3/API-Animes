import express from "express"
import animeController from "../controllers/animeController.js"

const animeRoutes = express.Router()

//Endpoint para listar todos os animes
animeRoutes.get("/animes", animeController.getAllAnimes)

//Endpoint para cadastrar um anime
animeRoutes.post("/addAnime", animeController.createAnime)

//Endpoint para excluir um anime
animeRoutes.delete("/delAnime/:id", animeController.deleteAnime)

//Endpoint para alterar dados de um anime
animeRoutes.put("/altAnime/:id", animeController.updateAnime)

//Endpoint para lista um anime só
animeRoutes.get("/anime/:id", animeController.getOneAnime)

export default animeRoutes
