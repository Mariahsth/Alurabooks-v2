const botoes=document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros(){
    const categoria=document.getElementById(this.id).value;
    let livrosFiltrados=categoria=="disponivel"? filtrarPorDisponibilidade():filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria=="disponivel") {
        const valorTotal=calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livrosDisponiveis= livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    let todosOsLivrosDisponiveis=document.getElementById("valor_total_livros_disponiveis");
    todosOsLivrosDisponiveis.innerHTML=
    `<div class="livros__disponiveis" >
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}


