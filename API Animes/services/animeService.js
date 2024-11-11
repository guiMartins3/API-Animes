import Anime from "../models/Animes.js"

class animeService {
    //Método para buscar todos os Animes
    async getAll() {
        try {
            const animes = await Anime.find()
            return animes
        } catch (error) {
            console.log(error)
        }
    }

    //Método para adicionar um anime
    async Create(title, number_seasons, gender, studio, opening, description) {
        try {
            const newAnime = new Anime ({
                title,
                number_seasons,
                gender,
                studio,
                opening,
                description
            })
            await newAnime.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para excluir um anime
    async Delete(id) {
        try {
            await Anime.findByIdAndDelete(id)
            console.log(`Anime com a id: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para alterar informações de um anime
    async Update(id, title, number_seasons, gender, studio, opening, description) {
        try {
            const updatedAnime = await Anime.findByIdAndUpdate (id, 
                {
                    title,
                    number_seasons,
                    gender,
                    studio,
                    opening,
                    description
                },
                {new:true}
            )
            console.log(`Dados do anime com o id: ${id} alterado com sucesso`)
            return updatedAnime
        } catch (error) {
            console.log(error)
        }
    }

    //Método para lista somente um anime
    async getOne(id) {
        try {
            const anime = await Anime.findOne({_id:id})
            return anime
        } catch (error) {
            console.log(error)
        }
    }
}

export default new animeService()