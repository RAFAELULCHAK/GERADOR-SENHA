const numeroSenha = document.quarySelector('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent =tamanhoSenha;
const botoes = document.quarySelectorAll('.parametro-senha__botao');
numeroSenha.textContent = 5;
const botoes = document.quarySelector('.parametro-senha__bot');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha-1
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
console.log(botoes)