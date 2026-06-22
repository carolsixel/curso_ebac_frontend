function Livro(titulo, editora){
    this.titulo = titulo;
    this.editora = editora;
}

function LivrariaDaTravessa(titulo, editora, genero, valor){
    Livro.call(this, titulo, editora);
    this.genero = genero;
    this.valor = valor;
}

function LivrariaLeitura(titulo, editora, genero, valor){
    Livro.call(this, titulo, editora);
    this.genero = genero;
    this.valor = valor;
}

function LivrariaDaVila(titulo, editora, genero, valor){
    Livro.call(this, titulo, editora);
    this.genero = genero;
    this.valor = valor;
}

const travessa = new LivrariaDaTravessa("Lógica de Programação e Algoritmos com JavaScript", "Novatec", "Programação", 79.21);
const leitura = new LivrariaLeitura("Jantar Secreto", "Companhia das Letras", "Suspense", 51.48);
const vila = new LivrariaDaVila("Orgulho e Preconceito", "Best Bolso", "Romance", 49.98);

console.log(travessa);
console.log(leitura);
console.log(vila);