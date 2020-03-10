// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200
}
