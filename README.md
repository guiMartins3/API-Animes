# Exemplo de documentação de API
![NPM](https://img.shields.io/npm/l/react)

# API Animes
Esta API é utilizada para gerenciar um catálogo de animes e seus personagens, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre animes e personagens.

## Endpoints
### - GET /animes
Esse endpoint é responsável por retornar a listagem de todos os animes cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os animes.

Exemplo de resposta:

```
{
    "animes": [
        {
            "title": "Naruto",
            "number_seasons": 5,
            "gender": "Shounen",
            "studio": "Pierrot",
            "description": "A história segue Naruto Uzumaki, um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage.",
            "opening": [
                {
                    "music_name": "Go!!!",
                    "anime_name": "Naruto",
                    "duration": "3:56",
                    "launch": 2004,
                    "band": "Flow",
                    "season_music": 1
                },
                {
                    "music_name": "Haruka Kanata",
                    "anime_name": "Naruto",
                    "duration": "4:15",
                    "launch": 2002,
                    "band": "Asian Kung-Fu Generation",
                    "season_music": 2
                }
            ]
        },
        {
            "title": "Attack on Titan",
            "number_seasons": 4,
            "gender": "Shounen",
            "studio": "MAPPA",
            "description": "A humanidade luta pela sobrevivência contra gigantes que devoram pessoas.",
            "opening": [
                {
                    "music_name": "Guren no Yumiya",
                    "anime_name": "Attack on Titan",
                    "duration": "4:28",
                    "launch": 2013,
                    "band": "Linked Horizon",
                    "season_music": 1
                },
                {
                    "music_name": "Shinzou wo Sasageyo",
                    "anime_name": "Attack on Titan",
                    "duration": "5:13",
                    "launch": 2017,
                    "band": "Linked Horizon",
                    "season_music": 2
                }
            ]
        }
    ]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - POST /addAnime
Esse endpoint é responsável por cadastrar um novo anime no banco de dados.

#### Parâmetros:
title: Título do anime.<br>
number_seasons: Número de temporadas.<br>
gender: Gênero do anime.<br>
studio: Estúdio que produziu o anime.<br>
description: Descrição adicional sobre o anime.<br>
opening: Lista de músicas de abertura (opcional).

Exemplo de requisição:

```
{
    "title": "One Piece",
    "number_seasons": 20,
    "gender": "Shounen",
    "studio": "Toei Animation",
    "description": "A história de Monkey D. Luffy e sua tripulação em busca do One Piece.",
    "opening": [
        {
            "music_name": "We Are!",
            "anime_name": "One Piece",
            "duration": "2:53",
            "launch": 1999,
            "band": "Hiroshi Kitadani",
            "season_music": 1
        }
    ]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo anime foi criado com sucesso.

Exemplo de resposta:

```
{
    "message": "Anime criado com sucesso!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```


### - DELETE /delAnime/
Esse endpoint é responsável por deletar um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o anime foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - PUT /altAnime/
Esse endpoint é responsável por atualizar as informações de um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser atualizado.<br>
title: Título do anime (opcional).<br>
number_seasons: Número de temporadas (opcional).<br>
gender: Gênero do anime (opcional).<br>
studio: Estúdio que produziu o anime (opcional).<br>
description: Descrição adicional sobre o anime (opcional).<br>
opening: Lista de músicas de abertura (opcional).<br>

Exemplo de requisição:

```
{
    "title": "One Piece Updated",
    "number_seasons": 21,
    "gender": "Aventura",
    "studio": "Toei Animation",
    "description": "Luffy e sua tripulação continuam em busca do lendário tesouro One Piece.",
    "opening": [
        {
            "music_name": "We Go!",
            "anime_name": "One Piece",
            "duration": "3:30",
            "launch": 2011,
            "band": "Hiroshi Kitadani",
            "season_music": 14
        }
    ]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do anime foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "anime": {
        "title": "One Piece Updated",
        "number_seasons": 21,
        "gender": "Aventura",
        "studio": "Toei Animation",
        "description": "Luffy e sua tripulação continuam em busca do lendário tesouro One Piece.",
        "opening": [
            {
                "music_name": "We Go!",
                "anime_name": "One Piece",
                "duration": "3:30",
                "launch": 2011,
                "band": "Hiroshi Kitadani",
                "season_music": 14
            }
        ]
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /anime/
Esse endpoint é responsável por retornar as informações de um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do anime solicitado.

Exemplo de resposta:

```
{
    "anime": {
        "title": "One Piece",
        "number_seasons": 20,
        "gender": "Shounen",
        "studio": "Toei Animation",
        "description": "A história de Monkey D. Luffy e sua tripulação em busca do One Piece.",
        "opening": [
            {
                "music_name": "We Are!",
                "anime_name": "One Piece",
                "duration": "2:53",
                "launch": 1999,
                "band": "Hiroshi Kitadani",
                "season_music": 1
            }
        ]
    }
}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o anime com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "error": "Anime não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /personagens
Esse endpoint é responsável por retornar a listagem de todos os personagens cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os personagens.

Exemplo de resposta:

```
{
    "characters": [
        {
            "name_character": "Naruto Uzumaki",
            "years_old": 17,
            "country_origin": "Konohagakure",
            "anime_origin": "Naruto",
            "signature_skill": "Rasengan"
        },
        {
            "name_character": "Monkey D. Luffy",
            "years_old": 19,
            "country_origin": "East Blue",
            "anime_origin": "One Piece",
            "signature_skill": "Gomu Gomu no Pistol"
        }
    ]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - POST /addPersonagem
Esse endpoint é responsável por cadastrar um novo personagem no banco de dados.

#### Parâmetros:
name_character: Nome do personagem.<br>
years_old: Idade do personagem.<br>
country_origin: País de origem do personagem.<br>
anime_origin: Anime de origem do personagem.<br>
signature_skill: Habilidade de assinatura do personagem.<br>

Exemplo de requisição:

```
{
    "name_character": "Naruto Uzumaki",
    "years_old": 17,
    "country_origin": "Konohagakure",
    "anime_origin": "Naruto",
    "signature_skill": "Rasengan"
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo personagem foi criado com sucesso.

Exemplo de resposta:

```
{
    "message": "Personagem criado com sucesso!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```


### - DELETE /delPersonagem/
Esse endpoint é responsável por deletar um personagem específico pelo seu ID.

#### Parâmetros:
id: ID do personagem a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o personagem foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - PUT /altPersonagem/
Esse endpoint é responsável por atualizar as informações de um personagem específico pelo seu ID.

#### Parâmetros:
id: ID do personagem a ser atualizado.<br>
name_character: Nome do personagem (opcional).<br>
years_old: Idade do personagem (opcional).<br>
country_origin: País de origem do personagem (opcional).<br>
anime_origin: Anime de origem do personagem (opcional).<br>
signature_skill: Habilidade de assinatura do personagem (opcional).<br>

Exemplo de requisição:

```
{
    "name_character": "Naruto Uzumaki Updated",
    "years_old": 18,
    "country_origin": "Konohagakure",
    "anime_origin": "Naruto",
    "signature_skill": "Rasen Shuriken"
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do anime foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "character": {
        "name_character": "Naruto Uzumaki Updated",
        "years_old": 18,
        "country_origin": "Konohagakure",
        "anime_origin": "Naruto",
        "signature_skill": "Rasen Shuriken"
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /personagem/
Esse endpoint é responsável por retornar as informações de um personagem específico pelo seu ID.

#### Parâmetros:
id: ID do personagem a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do personagem solicitado.

Exemplo de resposta:

```
{
    "character": {
        "name_character": "Naruto Uzumaki",
        "years_old": 17,
        "country_origin": "Konohagakure",
        "anime_origin": "Naruto",
        "signature_skill": "Rasengan"
    }
}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o anime com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "error": "Personagem não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```
