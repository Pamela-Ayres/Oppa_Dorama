function pesquisar() {
      // Obtém a seção onde os resultados serão exibidos
      let section = document.getElementById("resultados-pesquisa");
      console.log(section); // Loga a seção no console para verificação
    
      // Inicializa uma string vazia para armazenar os resultados
      let resultados = "";
    
      // Itera sobre os dados e constrói o HTML para cada resultado
      for (let dado of dados) {
        // Cria um novo elemento div para cada resultado
        resultados += `
          <div class="item-resultado">
            <h2>
             <a href=${dado.titulo} target="_blank"></a>
            </h2>
            <div class="container">
              <img src=${dado.imagem} alt="Capa dorama" class="imagem"> 
                <div class="texto">
                <p>${dado.descricao}</p> 
                <a href=${dado.link} target="_blank">Dorama Link - Pousando no Amor</a>
            </div>
          </div>
           </div>
        `;
      }
    section.innerHTML = resultados

  


