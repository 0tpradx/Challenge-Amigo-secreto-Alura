let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    if (!amigo) {
        Swal.fire({
            title: "Erro ao inserir nome!",
            text: "Por favor insira um nome válido.",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
        });
        return;
    }

    for (let i = 0; i < listaAmigos.length; i++) {
        if (amigo == listaAmigos[i]) {
            Swal.fire({
                title: "Nome já inserido!",
                text: "Se for outra pessoa, por favor coloque o sobrenome.",
                icon: "error",
                confirmButtonText: "OK",
                timer: 3200
            });
            return;
        }
    }

    listaAmigos.push(amigo);
    exibirAmigos('#listaAmigos');

    if (listaAmigos.length > 1) {
        document.getElementById('sortearAmigo').disabled = false;
    }

    limparCampo();
}

function exibirAmigos(tag) {
    let listaHTML = document.querySelector(tag);
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}

function exibeSorteado(texto) {
    let campo = document.querySelector('#resultado');
    campo.innerHTML = texto;
}

function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibeSorteado(`O amigo sorteado é: ${amigoSorteado}`);
    document.getElementById('sortearAmigo').disabled = true;
    document.getElementById('novoSorteio').disabled = false;
    document.getElementById('button-add').disabled = true;
    document.getElementById('amigo').disabled = true;
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}

function novoSorteio() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    exibeSorteado('');
    limparCampo();
    document.getElementById('button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.getElementById('novoSorteio').disabled = true;
    listaAmigos = [];
}
  
          

    
  
  

