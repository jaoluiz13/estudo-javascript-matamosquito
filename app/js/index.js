
var vidas = 1
var tempo = 20

var mosquitoTempo = 1500 

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'normal'){
    //1500
}else if(nivel == 'dificil'){
    mosquitoTempo = 1000
}else if (nivel =='chucknorris'){  
    mosquitoTempo = 7
}

// verificando o tamando do layout da tela para verificar 
// que a criacao aleatoria das moscas seja dentro da area visivel do jogador
// e que fique responsivo de acordo com o tamanho de tela ajustado pelo jogador

var altura = 0
var largura = 0


function ajustaPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura);

}

ajustaPalcoJogo();

var cronometro = setInterval(function(){

    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    if(tempo <=0 ){
        clearInterval(cronometro)
        clearInterval(mosquito)
        window.location.href ='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)

// criando uma funcao para chama-la no final do body do html pois se chamar no inicio o codigo quebra.
function posicaoRandomica (){

    //removendo o mosquito anterior caso exista um 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        
        //afetando os pontos de vida (NAO CONSEGUI FAZER)
        if (vidas > 3){
            window.location.href = 'derrota.html';
        } else {
           
            vidas++
        }
    }


    // criando as posicoes randomicas na tela baseadas em X e Y 
    //para as moscas aparecerem na tela
    //(math.random gera valores de 0 a 1 entao para gerar valores de acordo com a tela toda, multiplicamos por largura e altura)
    var posicaoX = Math.floor(Math.random() * largura)  -150
    var posicaoY = Math.floor(Math.random() * altura) -150

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
 
    console.log(posicaoX,posicaoY);


    //criando o elemento html 

    var mosquito = document.createElement('img');
    mosquito.src = '../../src/img/mosca.png'
    mosquito.className = tamanhoRandomico() +' '+ ladoRandomico()
    mosquito.style.left =  posicaoX + 'px'
    mosquito.style.top =  posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function (){
        this.remove()
    }


    document.body.appendChild(mosquito)

    
    
    
}

//criando mosquitos de tamanho aleatorio para aumentar a dificuldade do jogo
function tamanhoRandomico(){

    var classe = Math.floor(Math.random() * 3)

    

    switch (classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }

}

//criando lados para os mosquitos olhando para esquerda e para a direita de forma aleatoria

function ladoRandomico(){
    var classe = Math.floor(Math.random() * 2)

    

    switch (classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }

}




