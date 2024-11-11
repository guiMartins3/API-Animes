import express from "express"  
import characterController from "../controllers/characterController.js"  

const characterRoutes = express.Router()  

//Endpoint para listar todos os Personagens  
characterRoutes.get("/personagens", characterController.getAllCharacters,)  

//Endpoint para cadastrar um Personagem 
characterRoutes.post("/addPersonagem", characterController.createCharacter)  

//Endpoint para excluir um Personagem 
characterRoutes.delete("/delPersonagem/:id", characterController.deleteCharacter)  

//Endpoint para alterar dados de um Personagem 
characterRoutes.put("/altPersonagem/:id", characterController.updateCharacter)  

//Endpoint para listar um Personagem só 
characterRoutes.get("/personagem/:id", characterController.getOneCharacter)  

export default characterRoutes 