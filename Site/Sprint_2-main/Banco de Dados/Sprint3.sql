create database NparaN;
use NparaN;
drop database NparaN;

create table medico(
	idMedico int primary key auto_increment,
    nome varchar(45),
    especialidade varchar(45)
);

insert into medico values
(default, 'Meredith', 'cirurgiã geral'),
(default, 'Maggie', null),
(default, 'House', 'urologista');

create table paciente(
	idPaciente int primary key auto_increment,
    nome varchar(45),
    dtNasc date
) auto_increment = 100;

insert into paciente values
(default,'Wagner', '2001-02-05'),
(default,'Rafael', '2004-05-05'),
(default,'Duda ex corinthiana', '2006-07-17');

create table consulta(
	idConsulta int,
    dtConsulta datetime,
    valor decimal(6,2),
    fkMedico int,
		constraint fkDoMedico
			foreign key (fkMedico)
				references medico(idMedico),
    fkPaciente int,
		constraint fkDoPaciente
			foreign key (fkPaciente)
				references paciente(idPaciente),
	constraint pkComposta
		primary key (idConsulta, fkMedico,fkPaciente)
);

insert into consulta (idConsulta,fkMedico,fkPaciente, dtConsulta,valor) values
(1,1,100, '2025-11-05 09:00:00', 50.99),
(1,1,101, '2025-11-05 10:00:00', 75.99),
(1,2,101, '2025-11-05 11:00:00', 25.99),
(1,3,100, '2025-11-05 10:00:00', 67.50),
(2,1,101, '2025-11-05 10:00:00', 75.99);

select medico.nome as Medico,
	   paciente.nome as Paciente,
       dtConsulta as 'Data da consulta',
       valor
       from paciente join consulta
       on idPaciente = fkPaciente
       join medico 
       on idMedico = fkMedico;

select max(valor) from consulta; 
select min(valor) from consulta;
select max(valor) as 'Valor mais Alto',min(valor) as 'Valor mais Baixo' from consulta;
select count(especialidade) from medico;
select distinct valor from consulta;
select sum(valor) as 'Soma' from consulta;
select avg(valor) as 'Média' from consulta;
select avg(distinct valor) as 'Média' from consulta;
select round(AVG (valor), 2) as 'Média arredondada' from consulta;
select truncate(avg(valor), 1) as 'Valores truncados'from consulta;

select paciente.nome,
	   sum(valor) as 'A pagar'
       from paciente join consulta 
	   on idPaciente = fkPaciente
       group by paciente.nome;
       
select paciente.nome,
	   sum(valor) as 'A pagar'
       from paciente join consulta 
	   on idPaciente = fkPaciente
       group by paciente.nome, paciente.dtNasc;

select paciente.nome,
	   sum(valor) as 'A pagar'
       from paciente join consulta 
	   on idPaciente = fkPaciente
       group by paciente.nome, paciente.dtNasc
       having sum(valor) < 150;

select paciente.nome,
	   sum(valor) as 'A pagar'
       from paciente join consulta 
	   on idPaciente = fkPaciente
       group by paciente.nome, paciente.dtNasc
       having sum(valor) > avg(valor);

select paciente.nome from paciente join consulta
		on idPaciente = fkPaciente
			where valor > (select avg(valor) from consulta);

select paciente.nome,
	valor from paciente join consulta
		on idPaciente = fkPaciente limit 2; 