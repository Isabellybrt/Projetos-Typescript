import { Produto } from 'catalogo\tipos.ts';

var arroz: Produto = {
  nome: "arroz",
  preco: 4.00
};

var feijao: Produto = {
  nome: "feijão",
  preco: 4.25
};

var leite: Produto = {
  nome: "linguiça",
  preco: 16.30
};

var farinha: Produto = {
  nome: "carne",
  preco: 50.0
};

export var produtos: Produto[] = [arroz, feijao, leite, farinha];