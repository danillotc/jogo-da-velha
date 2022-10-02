const posicoes = {
    a: {
        1: '',
        2: '',
        3: '',
    },
    b: {
        1: '',
        2: '',
        3: '',
    },
    c: {
        1: '',
        2: '',
        3: '',
    },
};

const mensagem = document.getElementById('mensagem');

let jogador1 = true;
let jogoFinalizado = false;

function getMarca() {
    return jogador1 ? 'X' : 'O';
}

function jogada(posicao) {
    if (!jogoFinalizado) {
        if (!posicoes[posicao.charAt(0)][posicao.charAt(1)]) {
            marcarPosicao(posicao);
        } else {
            mensagem.innerText = `Jogador ${jogador1 ? 1 : 2}, esse espaço já foi marcado!`;
        };
    };
}

function marcarPosicao(posicao) {
    posicoes[posicao.charAt(0)][posicao.charAt(1)] = getMarca();
    document.getElementById(posicao).innerText = getMarca();
    fimDeJogo();
    proximaJogada();
}

function proximaJogada() {
    if (jogoFinalizado) {
        mensagem.innerText = `Fim de jogo! Jogador ${jogador1 ? 1 : 2} é o vencedor!`;
    } else {
        jogador1 = !jogador1;
        mensagem.innerText = `Jogador ${jogador1 ? 1 : 2}, sua vez!`;
    };
}

function fimDeJogo() {
    for (linha in posicoes) {
        if (posicoes[linha][1] 
            && posicoes[linha][1] === posicoes[linha][2]
            && posicoes[linha][1] === posicoes[linha][3]) {
            jogoFinalizado = true;
        };
    };

    for (coluna of [1,2,3]) {
        if (posicoes['a'][coluna] 
            && posicoes['a'][coluna]  === posicoes['b'][coluna] 
            && posicoes['a'][coluna]  === posicoes['c'][coluna] ) {
            jogoFinalizado = true;
        };
    };

    if (posicoes['a'][1] 
        && posicoes['a'][1]  === posicoes['b'][2] 
        && posicoes['a'][1]  === posicoes['c'][3]) {
        jogoFinalizado = true;
    };

    if (posicoes['a'][3] 
        && posicoes['a'][3]  === posicoes['b'][2] 
        && posicoes['a'][3]  === posicoes['c'][1]) {
        jogoFinalizado = true;
    };
}

function reiniciar() {
    mensagem.innerText = `Jogo reiniciado! Jogador 1, sua vez!`;
    for (linha in posicoes) {
        for (coluna of [1, 2, 3]) {
            posicoes[linha][coluna] = '';
            document.getElementById(`${linha+coluna}`).innerText = '';
        };
    };
    jogador1 = true;
    jogoFinalizado = false;
}