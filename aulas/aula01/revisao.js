// variaveis

let local = 10;

const imutavel = 10;

var global = 10;

//funcoes

function soma(a, b){
    return a + b
};

//funcoes arrow ou arrow functions

const soma2 =(a, b) => a + b;
console.log(soma(2, 3));
console.log(soma2(2, 3));

//arrays

const frutas = [];
frutas.push(["uva", "maca"]);
console.log(frutas);

frutas.forEach(fruta => console.log(fruta));
const achou = frutas.find((fruta) => fruta ==="banana");
console.log(achou);

//objects

const pessoa = {id:1, nome:"Henrique", sexo:"M"};
console.log(pessoa);
const {nome, sexo} = pessoa;
console.log(nome, sexo);

//modulos

export default frutas;
export {achou, soma};

import frutas from 'revisao.js'
import{achou} from 'revisao'