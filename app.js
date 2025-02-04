//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já está na lista!');
        return;
    }

    amigos.push(nome);
    input.value = '';

    const lista = document.getElementById('listaAmigos');
    const itemLista = document.createElement('li');
    itemLista.textContent = nome;
    lista.appendChild(itemLista);
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        resultado.innerHTML = '';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `
        <li style="color: #05DF05; font-weight: bold;">
            O sorteado é: ${amigoSorteado}
        </li>
    `;

    // Limpa a lista para novo sorteio
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}
