import Characters from "../models/Characters.js"  

class characterService {  

    //Método para buscar todos os Personagens 
    async getAllP() {  
        try {  
            const characters = await Characters.find()  
            return characters
        } catch (error) {  
            console.log(error)  
        }  
    } 

    //Método para adicionar um Personagem 
    async CreateP(name_character, years_old, country_origin, anime_origin, signature_skill) {  
        try {  
            const newCharacter = new Characters ({  
                name_character, 
                years_old, 
                country_origin, 
                anime_origin, 
                signature_skill 
            })  
            await newCharacter.save()  
        } catch (error) {  
            console.log(error)  
        }  
    }  

    //Método para excluir um Personagem 
    async DeleteP(id) {  
        try { 
            await Characters.findByIdAndDelete(id)  
            console.log(`Personagem com a id: ${id} foi deletado.`)  
        } catch (error) {  
            console.log(error)  
        }  
    }  

    //Método para alterar informações de um Personagem 
    async UpdateP(id, name_character, years_old, country_origin, anime_origin, signature_skill) {  
        try {  
            const updatedCharacter = await Characters.findByIdAndUpdate (id,   
                {  
                    name_character, 
                    years_old, 
                    country_origin, 
                    anime_origin, 
                    signature_skill 
                },  
                {new:true}  
            )  
            console.log(`Dados do personagem com o id: ${id} alterado com sucesso`)  
            return updatedCharacter
        } catch (error) {  
            console.log(error)  
        } 
    }  

 

    //Método para listar somente um Personagem 
    async getOneP(id) {  
        try {  
            const Character = await Characters.findOne({_id:id})  
            return Character
        } catch (error) {  
            console.log(error)  
        }  
    }  
}  

export default new characterService()