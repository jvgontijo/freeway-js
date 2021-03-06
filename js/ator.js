//ator
let xAtor = 100;
let yAtor = 368;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 27, 27);
    movimentaAtor();
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
            yAtor += 3;
        }
    }
    
    verificaColisao();
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width, height, cx, cy, diameter);
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, 
            alturaCarro, xAtor, yAtor, 14);
            if(colisao){
                somDaColisao.play();
                voltaAtorPosicaoInicial();
                if(pontosMaiorQueZero()){
                    meusPontos -= 1;
                }
            }
    }
}

function podeSeMover(){
    return yAtor < 366;
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function voltaAtorPosicaoInicial(){
    yAtor = 368;
}

function incluiPontos(){
    textAlign(CENTER);
    textSize(22);
    fill(color(80, 255, 255));
    text(meusPontos, width/5, 27);
    marcaPonto();
}

function marcaPonto(){
    if(yAtor < 15){
        somDoPonto.play();
        meusPontos += 1;
        voltaAtorPosicaoInicial();
    }
}