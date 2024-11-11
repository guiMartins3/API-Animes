import characterService from "../services/characterService.js"  
import {ObjectId} from "mongodb"  

//Buscando todos os Personagens 
const getAllCharacters = async (req, res) => {  
    try {  
        const characters = await characterService.getAllP()  
        res.status(200).json({characters:characters}) //Código OK  
    } catch (error) {  
        console.log(error)  
        res.status(500).json({error: "Erro interno do servidor."})  
    } 
}  

//Adicionando um Personagem 
const createCharacter = async (req, res) => {  
    try {  
        const {name_character, years_old, country_origin, anime_origin, signature_skill} = req.body  
        await characterService.CreateP(name_character, years_old, country_origin, anime_origin, signature_skill)  
        res.status(201).json({ message: "Personagem criado com sucesso!" }) //Código CREATED / Enviando resposta para o usuario  
    } catch (error) {  
        console.log(error)  
        res.status(500).json({error: "Erro interno do servidor."})  
    }  
}  

//Excluindo um Personagem 
const deleteCharacter = async (req, res) => {  
    try {  
        if (ObjectId.isValid(req.params.id)){  
            const id = req.params.id  
            characterService.DeleteP(id)  
            res.status(200).json({message: "Personagem excluido com sucesso."}) //Código OK  
        } else {  
            res.sendStatus(400) //Código BAD REQUEST  
        }  
    } catch (error) {  
        console.log(error)  
        res.status(500).json({error: "Erro interno do servidor."})  
    }  
}  

//Alterando dados de um Personagem 
const updateCharacter = async (req, res) => {  
    try { 
        if (ObjectId.isValid(req.params.id)){  
            const id = req.params.id  
            const {name_character, years_old, country_origin, anime_origin, signature_skill} = req.body  
            const character = await characterService.UpdateP(id, name_character, years_old, country_origin, anime_origin, signature_skill)  
            res.status(200).json({character}) //Código OK  
        } else {  
         res.sendStatus(400) //Código BAD REQUEST  
        }  
    } catch (error) {  
        console.log(error)  
        res.status(500).json({error: "Erro interno do servidor."})  
    }  
}  

//Pesquisando apenas um Personagem 
const getOneCharacter = async (req, res) => {  
    try {  
        if(ObjectId.isValid(req.params.id)) {  
            const id = req.params.id  
            const character = await characterService.getOneP(id)  
            if (!character) {  
                res.sendStatus(404) //Código BAD REQUEST  
            } else {  
                res.status(200).json({character})  
            }  
        } else {  
            res.sendStatus(400)  
        }  
    } catch (error) {  
        console.log(error)  
        res.status(500).json({ error: "Erro interno do servidor." });  
    }  
}  

export default {getAllCharacters, createCharacter, deleteCharacter, updateCharacter, getOneCharacter} 