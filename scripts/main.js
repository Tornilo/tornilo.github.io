//Alterar o título da página
/*
const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!';
*/

//Evento disparado pelo navegador quando você clica em algo com o mouse
/*
document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}
*/

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/Arduino.png') {
      minhaImagem.setAttribute ('src','imagens/goku.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/Arduino.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome. ');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else{

        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Arduino, por ' + meuNome;
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Arduino, por ' + nomeGuardado;

}

meuBotao.onclick = function() {
    defineNomeUsuario();
}