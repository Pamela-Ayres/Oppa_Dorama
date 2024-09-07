function pesquisar() {
 // Obtém a seção onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");
      // Obtém o termo de pesquisa inserido pelo usuário 
  let campoPesquisa = document.getElementById("campo-pesquisa").value
// Verifica se o usuário inseriu algum termo de pesquisa
  if(!campoPesquisa){
    // Se não houver termo, exibe uma mensagem informativa
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo relacionado ao dorama.</p>"
    return
  }
    // Inicializa uma string para armazenar os resultados da pesquisa 
  campoPesquisa = campoPesquisa.toLowerCase()
  let resultados = "";
  let titulo = "";
  let sinopse = "";
  let tags = "";
 // Itera sobre cada dado (dorama) no conjunto de dados
    for (let dado of dados) {
      // Converte as propriedades do dado para minúsculas para facilitar a comparação
      titulo = dado.titulo.toLowerCase()
      sinopse = dado.sinopse.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      
   // Verifica se o termo de pesquisa está presente no título, sinopse ou tags
      if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
        // Se o termo foi encontrado, cria um novo elemento HTML para exibir o resultado
        resultados += `
        <div class="item-resultado">
        <img src="${dado.imagem}" alt="Capa dorama">
        <div>
          <h2> 
            <a href="${dado.link}" target="_blank">Dorama Link -  ${dado.titulo}</a>
          </h2>
          <p>${dado.sinopse}</p>
          </div>
          
        </div>
        `;
      }
    
    
  }
// Verifica se algum resultado foi encontrado
  if(!resultados){
    // Se não houver resultados, exibe uma mensagem informativa
    resultados = "<p>Nada foi encontrado</p>"
  }
// Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML=resultados;
}