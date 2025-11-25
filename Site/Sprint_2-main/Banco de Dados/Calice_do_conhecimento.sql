create database Game_Select;
use Game_Select;

create table turma(
	idTurma int primary key auto_increment,
    casa varchar(50),
		constraint chk_casa check(casa in('Grinfimport', 'Sonsepython', 'Linux-linux', 'Clocknal')),
	Turno varchar(45),
		constraint chk_turno check(turno in('Manhã', 'Tarde', 'Noite')),
	diaAula date
);

INSERT INTO turma (casa, turno, diaAula) VALUES
('Grinfimport', 'Manhã', '1999-03-01'),
('Sonsepython', 'Tarde', '1999-03-02'),
('Linux-linux', 'Noite', '1999-03-03'),
('Clocknal', 'Manhã', '1999-03-04');

create table aluno(
	idAluno int primary key auto_increment,
    nome varchar(45),
    fkTurma int,
		constraint fkDaTurma
			foreign key (fkTurma)
				REFERENCES turma (idTurma),
	dtNascimento date,
    idaBanheiro time,
    voltaBanheiro time
);

INSERT INTO aluno (nome, fkTurma, dtNascimento, idaBanheiro, voltaBanheiro) VALUES
('Malware', 1, '1984-07-10', '09:15:00', '09:18:00'),
('Viktor Scrum', 2, '1983-12-02', '08:10:00', '08:12:00'),
('Cindrica Divvry', 3, '1983-09-19', '10:25:00', '10:30:00'),
('Fleurnanda Dellaccount', 4, '1984-01-11', '19:40:00', '19:45:00'),
('Segfauldi Weasley', 4, '1983-06-15', '07:50:00', '07:55:00'),
('Payload Lovegood', 3, '1984-04-07', '20:10:00', '20:12:00'),
('TryCatch Finnigan', 4, '1983-11-28', '08:45:00', '08:48:00'),
('Array Potter', 1, '1984-07-31', '09:50:00', '09:53:00');

create table professor(
	idProfessor int primary key auto_increment,
    nome varchar(45),
    materia varchar(45)
);

INSERT INTO professor (nome, materia) VALUES
('Alvivian Dumblodore', 'Poções SQL'),
('Serverus JP', 'Defesa Contra a arte do algoritimo'),
('Marcos Macgonagall', 'Documentação magica'),
('Matheus Salamander', 'Sistemas binarios e onde habitam');

create table torneio(
	idTorneio int primary key auto_increment,
    dtTorneio date,
    nome varchar(45)
);

INSERT INTO torneio (dtTorneio, nome) VALUES
('1999-06-20', 'Sprint Chalice of Knowledge - 100ª edição');

CREATE TABLE calice (
idCalice INT,
fkAluno iNT,
fkprofessor INT,
fktorneio INT,
dtRegistro datetime, 
PRIMARY KEY (idcalice,fkaluno,fkprofessor,fktorneio),
CONSTRAINT fkCaliceAluno FOREIGN KEY (fkAluno) REFERENCES aluno (idAluno),
CONSTRAINT fkCaliceProfessor FOREIGN KEY (fkProfessor) REFERENCES professor (idProfessor),
CONSTRAINT fkCaliceTorneio FOREIGN KEY (fkTorneio) REFERENCES torneio (idTorneio)
);

INSERT INTO calice (idCalice, fkAluno, fkProfessor, fktorneio, dtRegistro) VALUES
(1, 2, 1, 1, '1999-06-19 08:00:00'), 
(2, 3, 3, 1, '1999-06-19 08:15:00'),  
(3, 8, 2, 1, '1999-06-19 08:30:00'),  
(4, 4, 4, 1, '1999-06-19 08:45:00'),  
(5, 6, 3, 1, '1999-06-19 09:00:00');   