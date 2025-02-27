let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.querySelector('input').value;
  if(!amigo){
      Swal.fire({
          title: "Erro ao inserir nome!",
          text: "Por favor insira um nome válido.",
          icon: "error",
          confirmButtonText: "OK",
          timer: 3000
        });
        return;

  }
  for(i=0;i<listaAmigos.length;i++){
      if(amigo == listaAmigos [i]){
          Swal.fire({
              title: "Nome já inseerido!",
              text: "Se for outra pessoa por favor colocar o sobrenome",
              icon: "error",
              confirmButtonText: "OK",
              timer: 3200
            });
            return;
      }
  } 
  
  listaAmigos.push(amigo);
  for(let i = 0;i<listaAmigos.length;i++){
      exibirAmigos('#listaAmigos',`${listaAmigos}`);
      }
      if(listaAmigos.length>1){
        document.getElementById('sortearAmigo').disabled = false;
      }

  limparCampo();
  }


function exibirAmigos() {
    let listaHTML = document.querySelector('listaAmigos');
    listaHTML
    
  
  
