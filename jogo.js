console.log('[Denisson César] Flappy Bird')

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite
            flappyBird.largura, flappyBird.altura, //Tamanhdo da Sprites
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112, 
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        )

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        )
    }
}

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    gravidade: 0.25
    velocidade: 0
    atualiza() {
        flappyBird.velociadde = flappyBird.velocidade + flappyBird.gravidade
        console.log(flappyBird.velocidade)
        flappyBird.y = flappyBird.y + flappyBird.velocidade
    }

    desenha() {
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0,0, canvas.width, canvas.height)


        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )
    }
}


function loop() {
    
    planoDeFundo.desenha()
    chao.desenha()
    flappyBird.desenha()

    flappyBird.y = flappyBird.y + 1

    requestAnimationFrame(loop);
}

loop();

