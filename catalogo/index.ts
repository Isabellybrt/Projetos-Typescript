import { Produto, CarrinhoDeCompras } from './tipos';
import { produtos } from './produtos';

console.log("Mercadinho da dona Maria")

// Calcula o preço total do carrinho
function calcularPreco(carrinho: CarrinhoDeCompras): number {
  let preco = 0;
  for (const produto of carrinho) {
    preco += produto.preco;
  }
  return preco;
}

// Exibe os produtos no console com preços originais
function mostrarCarrinho(carrinho: CarrinhoDeCompras): void {
  console.log('Carrinho de Compras:');
  carrinho.forEach((produto, index) => {
    const precoOriginal = produto.preco.toFixed(2); // Formata apenas para exibição

    console.log(`${index + 1}. ${produto.nome}`);
    console.log(`   Preço original: R$${precoOriginal}`);
  });
}

// Ordena os produtos do carrinho de compras por preço crescente
function ordenarPorPrecoCrescente(carrinho: CarrinhoDeCompras): CarrinhoDeCompras {
  return [...carrinho].sort((a, b) => a.preco - b.preco);
}

// Cria um carrinho de compras com os produtos criados
const carrinhoDeCompras: CarrinhoDeCompras = [...produtos];

// Ordena o carrinho de compras por preço crescente (cria uma cópia antes)
const carrinhoOrdenado = ordenarPorPrecoCrescente([...carrinhoDeCompras]);
mostrarCarrinho(carrinhoOrdenado);

// Exibe o preço total sem desconto
const totalSemDesconto = calcularPreco(carrinhoDeCompras);
console.log(`Preço total: R$${totalSemDesconto.toFixed(2)}`);
