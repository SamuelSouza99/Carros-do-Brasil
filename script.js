// Função para pesquisar carros em um conjunto de dados e exibir os resultados em um elemento HTML
function pesquisar() {
  //Guarda o valor, já modificado pelo toLowerCase, numa variável chamada campoPesquisa
  let campoPesquisa = document.getElementById('campo_pesquisa').value.toLowerCase();
  //guarda o id resultados numa variável chamada res.
  let res = document.getElementById('resultados');

    // O switch determina qual ação será tomada dependendo do que o usuário escrever no input.
    switch (campoPesquisa) {
      //ano de fabricação
      case 'ano':
        res.innerHTML = ''
        for (let carro of dados) {
          res.innerHTML += `
            <p class='resDados'>Segundo dados coletados, o ${carro.nome} foi fabricado em ${carro.ano}.</p>
          `
        }
        break;
      
      case 'velocidade':
        //Velocidade máxima
        res.innerHTML = ''
        for (let carro of dados) {
          res.innerHTML += `
            <p class='resDados'>O ${carro.nome} tem uma velocidade máxima de ${carro.velocidade_total}.</p>
          `
        }
        break;

      case 'preco':
        //preço caso escrito de maneira erronia.
        res.innerHTML = ''
        for (let carro of dados) {
          res.innerHTML += `
            <p class='resDados'>Segundo dados coletados, o ${carro.nome} custa ${carro.preco.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL'})}.</p>
          `
        }
        break;

        case 'preço':
          //Preço dos carros, em real.
          res.innerHTML = ''
          for (let carro of dados) {
            res.innerHTML += `
              <p class='resDados'>Segundo dados coletados, o ${carro.nome} custa ${carro.preco.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL'})}.</p>
            `
          }
          break;

        case 'marca':
          // Fabricantes dos carros.
          res.innerHTML = ''
          for (let carro of dados) {
            res.innerHTML += `
              <p class='resDados'>O ${carro.nome} é da fabricante ${carro.marca}.</p>
            `
          }
          break;

        case 'marcas':
          //Fabricantes caso escrito no plural.
          res.innerHTML = ''
          for (let carro of dados) {
            res.innerHTML += `
              <p class='resDados'>O ${carro.nome} é da fabricante ${carro.marca}.</p>
            `
          }
          break;

        case 'classe':
          //Classe dos carros.
          res.innerHTML = ''
          for (let carro of dados) {
            res.innerHTML += `
              <p class='resDados'>O ${carro.nome} é de classe ${carro.classe}.</p>
            `
          }
          break;

        case 'tipo':
          //Tipo de cada carro.
          res.innerHTML = ''
          for (let carro of dados) {
            res.innerHTML += `
              <p class='resDados'>O ${carro.nome} é do tipo ${carro.tipo}.</p>
            `
          }
          break;

        case '':
          //Caso o botão seja acionado sem o input ser preenchido, um alerta de erro irá aparecer na tela.
          alert('[ERRO!] Insira um valor no input.')
          break;

        default:
          //Caso o valor obtido do input não tenha coerência com os dados disponíveis, além de uma sejestão do que inserir.
          alert(`
                  Nenhum valor encontrado.
                  Tente:
                  Preço, Velocidade, ano, tipo, classe, marca.
            `)
    }
}

// Obtém o elemento HTML onde os resultados serão exibidos
let resultadosDiv = document.getElementById('infos');
  
// Limpa o conteúdo anterior do elemento de resultados
resultadosDiv.innerHTML = '';

// Itera sobre cada carro no conjunto de dados
for (let carro of dados) {
  // Cria uma nova div para cada carro
  let carroDiv = document.createElement('div');
  carroDiv.innerHTML = `
    <h2>${carro.nome}</h2>
    <p class='txt'>O ${carro.nome} da marca ${carro.marca} é um veiculo do tipo ${carro.tipo} de classe ${carro.classe}. Criado em ${carro.ano} o ${carro.nome} pode atingir a velocidade de ${carro.velocidade_total}.</p>

    <details>
      <summary>Mais informações.</summary>
      <p>
          ${carro.descricao}
      </p>
    </details>
    <hr>
  `;
  // Adiciona a div do carro ao elemento de resultados
  resultadosDiv.appendChild(carroDiv);
}