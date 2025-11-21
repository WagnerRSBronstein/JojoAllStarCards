var imagens = {
  1: "./assets/jotaro.jpg",
  2: "./assets/kira.jpg",
  3: "./assets/Dio.png",
  4: "./assets/diavolo.jpg",
  5: "./assets/pucci.jpg",
  6: "./assets/josuke.png",
  7: "./assets/giorno.png",
  8: "./assets/jolyne.png",
  9: "./assets/valentine.jpg"
};

function imagemCarta(codigo) {
  return imagens[codigo] || "";
}

function nomeCarta(codigo) {
  var nomes = ["", "Jotaro Kujo", 
                   "Yoshikage Kira", 
                   "Dio Brando", 
                   "Diavolo", 
                   "Pucci", 
                   "Josuke Higashikata", 
                   "Giorno Giovanna", 
                   "Jolyne Kujo",
                   "Funny Valentine"];
  return nomes[codigo] || "Desconhecido";
}

// habilidades
var habilidades = {
  1: ["Star Finger (15 dano)",
      "Ora Ora Rush (25 dano)", 
      "Star Platinum The World (buff e paralisa 2 rodadas)"],

  2: ["Killer Queen Punch (6 dano)", 
      "Sheer Heart Attack (9 dano)", 
      "Bites the Dust (cura total + buff de mais 5 de dano na proxima habilidade)"],

  3: ["Regeneração Sombria (cura 15)", 
      "Muda! Muda! Muda! (20 dano)", 
      "ZA WARUDO! (paralisa por 3 rodadas)"],

  4: ["Golpe do Rei Carmesim (15 dano)", 
      "King Crimson: Apagar o Tempo (25 dano)", 
      "Epitaph: Visão do Futuro (epitaph, anula dano por 1 rodada)"],

  5: ["Disc Cutter (15 dano)", 
      "Crucified (10 dano + cura 15)", 
      "White Snake (trava habilidades por 3 rodadas)"],

  6: ["Dora! (15 dano)", 
      "Cabelo ridiculo!? (20 dano)", 
      "Se eu te curar primeiro... (cura inimigo + dano + buff no proximo ataque)"],

  7: ["Gold Experience (cura 15)", 
      "Overdose de vitalidade (15 dano)", 
      "Páginas de Muda! (30 dano)"],

  8: ["Stone Free (cura 10)", 
      "Ora ora ora! (15 dano)", 
      "Yare yare dawa (buff + epitaph)"],

  9: ["Troca de dimensões (epitaph + cura 20)", 
      "O primeiro a pegar o guardanapo (8 dano)", 
      "Love train (execute com menos de 40% da vida)"]
};

// golpes usado em batalha
var golpes = {
  1: [ { nome: "Star Finger", dano: 15 },
       { nome: "Ora Ora Rush", dano: 25 }, 
       { nome: "Star Platinum The World (buff e paralisa)", buff: 3, paralisa: 2 } ],

  2: [ { nome: "Killer Queen Punch", dano: 6 }, 
       { nome: "Sheer Heart Attack", dano: 9 }, 
       { nome: "Bites the Dust", cura_total: true, buff: 3 } ],

  3: [ { nome: "Regeneração Sombria", cura: 15 }, 
       { nome: "Muda! Muda! Muda!", dano: 20 }, 
       { nome: "ZA WARUDO!", paralisa: 3 } ],

  4: [ { nome: "Golpe do Rei Carmesim", dano: 15 },
       { nome: "King Crimson: Apagar o Tempo", dano: 25 }, 
       { nome: "Epitaph: Visão do Futuro", epitaph: true } ],

  5: [ { nome: "Disc Cutter", dano: 15 }, 
       { nome: "Crucified", dano: 10, cura: 15 }, 
       { nome: "White Snake", trava: true } ],

  6: [ { nome: "Dora!", dano: 15 }, 
       { nome: "Cabelo ridiculo!?", dano: 20 }, 
       { nome: "Se eu te curar primeiro, não será covardia!", cura_inimigo: 20, dano: 20, buff: 3 } ],

  7: [ { nome: "Gold Experience", cura: 15 }, 
       { nome: "Overdose de vitalidade", dano: 15 }, 
       { nome: "Páginas de Muda!", dano: 30, buff: 3 } ],

  8: [ { nome: "Stone Free", cura: 10 },
       { nome: "Ora ora ora!", dano: 15 }, 
       { nome: "Yare yare dawa", buff: 3, epitaph: true, dano: 20 } ],

  9: [ { nome: "Troca de dimensões", epitaph: true, cooldown: 3, cura: 20 },
       { nome: "O primeiro a pegar o guardanapo", dano: 8 }, 
       { nome: "Love train", dano: 1, execute: true } ]
};