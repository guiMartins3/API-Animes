import animeService from "../services/animeService.js"
import {ObjectId} from "mongodb"

//Buscando todos os animes
const getAllAnimes = async (req, res) => {
    try {
        const animes = await animeService.getAll()
        res.status(200).json({animes:animes}) //Código OK
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

//Adicionando um anime
const createAnime = async (req, res) => {
    try {
        const {title, number_seasons, gender, studio, opening, description} = req.body
        await animeService.Create(title, number_seasons, gender, studio, opening, description)
        res.status(201).json({ message: "Anime criado com sucesso!" }) //Código CREATED / Enviando resposta para o usuario
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

//Excluindo um anime
const deleteAnime = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            animeService.Delete(id)
            res.status(200).json({message: "Anime excluido com sucesso."}) //Código OK
        } else {
            res.sendStatus(400) //Código BAD REQUEST
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

//Alterando dados de um anime
const updateAnime = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {title, number_seasons, gender, studio, opening, description} = req.body
            const anime = await animeService.Update(id, title, number_seasons, gender, studio, opening, description)
            res.status(200).json({anime}) //Código OK
        } else {
         res.sendStatus(400) //Código BAD REQUEST
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

//Buscando um anime só
const getOneAnime = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const anime = await animeService.getOne(id)
            if (!anime) {
                res.sendStatus(404) //Código BAD REQUEST
            } else {
                res.status(200).json({anime})
            }
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}

export default {getAllAnimes, createAnime, deleteAnime, updateAnime, getOneAnime}