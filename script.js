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
        document.getElementById(posicao).innerHTML = jogador1 ? 'X' : 'O';
        jogador1 = !jogador1;
        mensagem.innerHTML = `Jogador ${jogador1 ? 1 : 2}, sua vez!`;
    } else {
        mensagem.innerHTML = `Jogador ${jogador1 ? 1 : 2}, esse espaço já foi marcado!`;
    }
    console.log(posicoes);
}