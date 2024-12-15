const contatos = [];

function cadastrarContato(){
  let nome = document.querySelector("#nome").value;
  let cpf = document.querySelector("#cpf").value;
  let dataNascimento = document.querySelector("#dataNascimento").value;
  let endereco = document.querySelector("#endereco").value;

  if(!nome || !cpf || !dataNascimento || !endereco){
    alert('Erro: Algum campo não foi preenchido corretamente!');
    return;
  }

  const cpfExistente = contatos.some(contato => contato.cpf === cpf);
  if(cpfExistente){
    alert('Erro: CPF já cadastrado!');
    return;
  }

  const novoContato = {
    nome,
    cpf,
    dataNascimento,
    endereco
  };

  contatos.push(novoContato);

  alert("Contato salvo com sucesso!");

  atualizarCards();
}

let isExibido = 0;

function exibirContatos(){
  atualizarCards();

  const divCards = document.getElementById('div-cards');  
  
  if(isExibido == 1){
    divCards.style.display = 'none';
    divCards.innerHTML='';
    isExibido = 0;
  }else{
    divCards.style.display = '';
    isExibido = 1;
  }
}

function buscarContato(){
  const cpfDigitado = (window.prompt("Digite o CPF do contato que deseja buscar:"));

  if(cpfDigitado === ''){
    alert('Erro: Por favor, digite o CPF!');
    return;
  }
  
  const contatoEncontrado = contatos.find(contato => contato.cpf === cpfDigitado);

  if(!contatoEncontrado){
    alert('CPF não encontrado!');
  }else{
    alert("Nome: " + contatoEncontrado.nome + ", Data de Nascimento: " + contatoEncontrado.dataNascimento + ", Endereço: "+ contatoEncontrado.endereco);
  }
}

function removerContato(){
  const cpfDigitado = (window.prompt("Digite o CPF do contato que deseja remover:"));

  if(cpfDigitado === ''){
    alert('Erro: Por favor, digite o CPF!');
    return;
  }
  
  const contatoEncontrado = contatos.find(contato => contato.cpf === cpfDigitado);

  if(!contatoEncontrado){
    alert('CPF não encontrado!');
  }else{
    const i = contatos.findIndex(contato => contato.cpf === cpfDigitado);
    contatos.splice(i, 1);
    alert('Contato excluído com sucesso!');
    atualizarCards();
  }
}

function atualizarCards(){
  const divCards = document.getElementById('div-cards');  

  divCards.innerHTML = "";

  contatos.forEach(contato => {
    divCards.innerHTML += `

    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">${contato.nome}</h5>
        <p class="card-text"><strong>CPF: </strong>${contato.cpf}</p>
        <p class="card-text"><strong>Data de Nascimento: </strong>${contato.dataNascimento}</p>
        <p class="card-text"><strong>Endereço: </strong>${contato.endereco}</p>
      </div>
    </div>
    
    `;
  });
}