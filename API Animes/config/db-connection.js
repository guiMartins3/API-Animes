//Importando o mongoose 
import mongoose from "mongoose"; 

const connect = () => { 
  mongoose.connect( 
    `mongodb+srv://guilhermefatec33:admin@cluster0.jjbce.mongodb.net/api-animes?retryWrites=true&w=majority&appName=Cluster0` 
    
  ); 
}; 

const connection = mongoose.connection; 

connection.on("error", () => { 
  console.log("Erro ao conectar com o mongoDB"); 
}); 

connection.on("open", () => { 
  console.log("Conectado ao mongoDB com sucesso"); 
}); 

connect(); 

export default mongoose; 