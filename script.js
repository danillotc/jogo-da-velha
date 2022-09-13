const posicoes = {
    a: {
        1: false,
        2: false,
        3: false,
    },
    b: {
        1: false,
        2: false,
        3: false,
    },
    c: {
        1: false,
        2: false,
        3: false,
    },
};

const mensagem = document.getElementById('mensagem');

let jogador1 = true;

function marcarPosicao(posicao) {
    let alvo = posicoes[posicao.charAt(0)][posicao.charAt(1)];
    if (!alvo) {
        posicoes[posicao.charAt(0)][posicao.charAt(1)] = true;
        document.getElementById(posicao).innerText = jogador1 ? 'X' : 'O';
        jogador1 = !jogador1;
        mensagem.innerText = `Jogador ${jogador1 ? 1 : 2}, sua vez!`;
    } else {
        mensagem.innerText = `Jogador ${jogador1 ? 1 : 2}, esse espaço já foi marcado!`;
    }
}

function reiniciar() {
    mensagem.innerText = `Jogo reiniciado! Jogador 1, sua vez!`;
    for (linha in posicoes) {
        for (coluna of [1, 2, 3]) {
            posicoes[linha][coluna] = false;
            document.getElementById(`${linha+coluna}`).innerText = '';
        }
    };
}