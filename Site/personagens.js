var imagens = {
  1: "https://media.discordapp.net/attachments/700957020353986611/1431665628594311280/Jotaro_Part_4.jpg?ex=68fe3e04&is=68fcec84&hm=5e633a221af660bb31d239221bc80aa9116689629865e7ca1d37ad3395dfe869&=&format=webp&width=521&height=648",
  2: "https://media.discordapp.net/attachments/700957020353986611/1431666755956379760/1669025476_1-pibig-info-p-kira-yushikage-vkontakte-1.jpg?ex=68fe3f11&is=68fced91&hm=421d55f69577550a52e1e411a8ad4544fa018e3c1b05d20538365d167a73814b&=&format=webp",
  3: "https://media.discordapp.net/attachments/700957020353986611/1431667457524891699/dio-part-6-physique-question-v0-6xbck6lnfzdb1.png?ex=68fe3fb8&is=68fcee38&hm=499bd18fd5c4589b903e69031e581bddcb7f0d05857fc3a93bc7c03f10ef1851&=&format=webp&quality=lossless",
  4: "https://media.discordapp.net/attachments/700957020353986611/1431668874084090109/CAPA-9-1200x675-cropped.jpg?ex=68fe410a&is=68fcef8a&hm=3eb2d47af9066cdb64b34d8fcd57381799069cb5e197ace7f12f13f3e3d1eb83&=&format=webp&width=480&height=648",
  5: "https://media.discordapp.net/attachments/700957020353986611/1431670942123425882/faffa719d683e0a786ae1fcf0fdc8b58.jpg?ex=68fe42f7&is=68fcf177&hm=a3ec8d8684fd20b9216cb72c16d156aa695eb8230ade081d3624c4b418c9d2c7&=&format=webp&width=468&height=648",
  6: "https://media.discordapp.net/attachments/700957020353986611/1431672079530463413/josuke.png?ex=68fe4406&is=68fcf286&hm=ea2c06c61c21f724ff839d39bce5fd0663ce832d929332f2916aa41803abe5fa&=&format=webp&quality=lossless",
  7: "https://media.discordapp.net/attachments/700957020353986611/1431672450999124109/what-is-giornos-most-iconic-pose-v0-xpocd4yt2bzc1.png?ex=68fe445f&is=68fcf2df&hm=0673007a8a25087ca6bfeb301967d7ed7d3a5423679743e289fa8a9b8875b58d&=&format=webp&quality=lossless",
  8: "https://media.discordapp.net/attachments/700957020353986611/1431671400606859264/filters_quality95formatwebp.png?ex=68fe4365&is=68fcf1e5&hm=4fc4c3e9e8117c28684e08529740a6652388bb5b230bdcedb59172e090a1ad2b&=&format=webp&quality=lossless",
  9: "https://media.discordapp.net/attachments/700957020353986611/1431664940850221106/valentinef.png?ex=68fe3d60&is=68fcebe0&hm=bfbad9f1eafdbebfb92816011f5f17b823034fa976559c06480005877cd6e990&=&format=webp&quality=lossless"
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