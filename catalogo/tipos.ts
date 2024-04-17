type Produto {
  nome : string;
  preco : number;
};

type CarrinhoDeCompras {
  produtos : Produto[] = [];
};

