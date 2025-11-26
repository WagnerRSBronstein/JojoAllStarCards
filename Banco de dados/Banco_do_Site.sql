create database JojoAllStarCards;
use JojoAllStarCards;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    sobrenome varchar(45),
    email varchar(50) not null unique,
    telefone char(15),
    dtNasc date,
    senha varchar(255) not null
);

create table hotfix (
	idHotfix int primary key auto_increment,
    nickname varchar(45),
    email varchar(45),
    mensagem varchar(500)
);

CREATE TABLE historico_batalhas (
    id_batalha INT PRIMARY KEY auto_increment,
    idUsuario INT NOT NULL,
    dano_causado INT NOT NULL DEFAULT 0,
    data_batalha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM historico_batalhas;

SELECT max(id_batalha) AS batalha FROM historico_batalhas WHERE idUsuario = 1;

CREATE TABLE estatisticas_jogador (
    id_estatistica INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL UNIQUE,
    partidas INT NOT NULL DEFAULT 0,
    vitorias INT NOT NULL DEFAULT 0,
    derrotas INT NOT NULL DEFAULT 0,
    empates INT NOT NULL DEFAULT 0,
    personagem_favorito VARCHAR(50),
    dano_total INT NOT NULL DEFAULT 0,
    cura_total INT NOT NULL DEFAULT 0,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

