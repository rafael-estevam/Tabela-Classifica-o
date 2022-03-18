var jogadores = [];
var excedePartidas = false;
var novoJogador = document.getElementById("nome");
var novoEscudo = document.getElementById("escudo");
novoJogador.focus();
  
function calculaPontos(jogador) {
   jogador.pontos = jogador.vitorias * 3 + jogador.empates;
   return jogador.pontos;
}

jogadores.push({nome:"CORINTHIANS", escudo:"https://iconape.com/wp-content/files/rv/332212/png/Esporte_Clube_Corinthians_de_Laguna-SC-logo.png",
    vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"GUARANI", escudo:"https://iconape.com/wp-content/files/la/332127/png/Guarani_Futebol_Clube_2007-logo.png",
    vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"SANTOS", escudo:"https://iconape.com/wp-content/files/ec/332300/png/Santos_Futebol_Clube_de_Santos-SP-logo.png",
    vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"SÃO PAULO", escudo:"https://iconape.com/wp-content/files/gt/332146/png/Sao_Paulo_Futebol_Clube_de_Sao_Paulo-SP-logo.png",
    vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"PONTE PRETA", escudo:"https://iconape.com/wp-content/files/oo/332230/png/Ponte_Preta-logo.png",
     vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"VARMEIRAS", escudo:"https://iconape.com/wp-content/files/uh/246255/png/palmeiras-varmeiras-clube-logo.png",
    vitorias:0, empates:0,  derrotas:0, pontos:0
});
jogadores.push({nome:"RB BRAGANTINO", escudo:"https://iconape.com/wp-content/files/ic/324287/png/red-bull-bragantino-sp-logo.png",
     vitorias:0, empates:0,  derrotas:0, pontos:0
});


imprimeJogadores(jogadores);

function imprimeJogadores(jogador) {
    if (jogador.length!=0){
        
        var element = "";
        for (var i = 0; i < jogador.length; i++) {
        element += "<tr>";
        element +=    `<td><img src='${jogador[i].escudo}'><br><label>${jogador[i].nome}</label></td>`;
        element +=    "<td>" + jogador[i].vitorias + "</td>";
        element +=    "<td>" + jogador[i].empates + "</td>";
        element +=    "<td>" + jogador[i].derrotas + "</td>";

        jogador[i].pontos = calculaPontos(jogador[i]);
        element +=    "<td>" + jogador[i].pontos + "</td>";

        element +=    "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        element +=    "<td><button class='empate' onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
        element +=    "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        element += "</tr>";
        }
    } else {
        var element ="";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = element;
}
  
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    excedePartidas = partidasJogadas();

    if (!excedePartidas){
        imprimeJogadores(jogadores);
    } else {
        jogador.vitorias--;
    }    
}
  
function adicionarEmpate(i) {
   var jogador = jogadores[i];
   jogador.empates++;
   excedePartidas = partidasJogadas();

    if (!excedePartidas){
        imprimeJogadores(jogadores);
    } else {
        jogador.empates--;
    } 

//    lógica empate automático para todos os jogadores
//    for (var j=0; j<jogadores.length; j++){
//     jogadores[j].empates++;
//    }   
}
  
function adicionarDerrota(i) {
   var jogador = jogadores[i];
   jogador.derrotas++;
   excedePartidas = partidasJogadas();

    if (!excedePartidas){
        imprimeJogadores(jogadores);
    } else {
        jogador.vitorias--;
    } 
}

function partidasJogadas () {
    var partidasJogador;
    
    for (var j=0; j<jogadores.length; j++){
        partidasJogador = jogadores[j].vitorias+jogadores[j].derrotas+jogadores[j].empates;
        if (partidasJogador > (jogadores.length*2)-2){
         alert("Número de partidas excede as rodadas do turno");
         excedePartidas = true;
         return excedePartidas;
        }
    } 
}

function addJogador() {

    if (novoJogador.value=="" || novoEscudo.value=="") {
        alert("Por favor, preencha todos os campos!")
    }   else if(!novoEscudo.value.endsWith(".png")){
        alert("Por favor, insira uma imagem válida!");
    }   else {
    jogadores.push({nome:novoJogador.value, escudo:novoEscudo.value,
        vitorias:0, empates:0,  derrotas:0, pontos:0
    });
    imprimeJogadores(jogadores);
    }
    novoJogador.value="";
    novoEscudo.value="";
    novoJogador.focus();
}

function limparPontos(jogador){
    for (var i=0; i<jogador.length; i++){
        jogador[i].vitorias=0;
        jogador[i].empates=0;
        jogador[i].derrotas=0;
        jogador[i].pontos=0;
    }
    imprimeJogadores(jogadores);
}

function limpaJogadores (){
    jogadores = [];
    imprimeJogadores(jogadores);
    novoJogador.focus();
}