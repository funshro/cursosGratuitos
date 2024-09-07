

function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será o container para os resultados.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML que será gerado.
    let resultados = "";
    let titulo = "";
    let descricao = "";

    let textoDigitado = document.getElementById("texto_digitado").value;
    // console.log(textoDigitado);


    if(!textoDigitado){
      section.innerHTML = "Nenhuma plataforma correspondente."
      return;
    }    

    textoDigitado = textoDigitado.toLowerCase();
    // Itera sobre cada curso presente no array 'cursos'.
    // Para cada curso, um bloco de HTML será gerado e adicionado à string 'resultados'.
    for (let curso of cursos) {
      titulo = curso.instituicao.toLowerCase();
      descricao = curso.cursosGratuitos.toLowerCase();

      if(titulo.includes(textoDigitado) || descricao.includes(textoDigitado)){
        // Cria um novo elemento HTML <div> para cada curso, com a classe 'item-resultado'.
      // Dentro desta div, são adicionados elementos HTML para exibir as informações do curso.
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" id="title_filme">${curso.instituicao}</a></h2>
        <p><strong>Cursos oferecidos:</strong> ${curso.cursosGratuitos}</p>
        <p><strong>Duração estimada:</strong> ${curso.duracaoEstimada}</p>
        <p><strong>Carga Horária total:</strong> ${curso.cargaHorariaTotal}</p>
        <p><strong>Ritmo de estudo:</strong> ${curso.ritmoEstudo}</p>
        <p><strong>Formato:</strong> ${curso.formato}</p>
        <p><strong>Número de módulos:</strong> ${curso.numeroModulos}</p>
        <p><strong>Pré-requisito:</strong> ${curso.preRequisitos}</p>
        <p><strong>Nível de dificuldade:</strong> ${curso.nivelDificuldade}</p>
        <p class="descricao-meta"><strong>Reconhecimento: </strong> ${curso.reconhecimento}</p>
        <a href="${curso.link}" target="_blank"><button>Link da plataforma</button></a>
      </div>
    `;
      }
      
    }

    if(!resultados) {
      resultados = "<p>Não há nenhum resultado</p>";
    }
  
    // Atribui o HTML gerado ao conteúdo da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}