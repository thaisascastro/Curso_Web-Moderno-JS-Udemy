// Object.preventExtensions = n permite que o objeto seja extendido, n pode adc novos attrib
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal = selar, n consegue adc elementos/excluir, porem consegue mexer nos atrib q existe
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
delete pessoa.idade
console.log(pessoa)
//Object.freeze = selado + Valores constantes




