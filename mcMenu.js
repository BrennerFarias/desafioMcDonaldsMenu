let nomeProdutos = []
let totalGasto = 0
let lojaAtual = "McDonald's"
let opcao


MenuPrincipal()


function MenuPrincipal() {
  while (opcao !== 0) {
    opcao = parseFloat(
      prompt(
        `\nBem-vindo ao McDonald's!\nEscolha uma opção:\n` +
          `1. Fazer Pedido\n` +
          `0. Finalizar Pedido\n:`
      )
    );

    if (opcao === 1) {
      fazerPedido();
    } else if (opcao === 0) {
      console.log("\nFinalizando o pedido...\n");
      finalizarCompra();
    } else {
      console.log("\nOpção inválida, tente novamente!");
    }
  }
}

function fazerPedido() {
  let continuar = "sim";

  while (continuar.toLowerCase() === "sim") {
    let nome = prompt(
      `Qual o nome do produto que deseja comprar no ${lojaAtual}? `
    );
    let valor = parseFloat(prompt(`Qual o valor do produto "${nome}"? R$ `));

    nomeProdutos.push(nome);
    totalGasto += valor;

    console.log(`\nProduto "${nome}" adicionado por ${formatarValor(valor)}.`);
    console.log(`Total gasto até agora: ${formatarValor(totalGasto)}.`);

    continuar = prompt("Deseja adicionar mais produtos? (sim/não): ");
  }
}

function finalizarCompra() {
  console.log("\nResumo do pedido:");

  for (let i = 0; i < nomeProdutos.length; i++) {
    console.log(`${i + 1}. ${nomeProdutos[i]}`);
  }

  console.log(`\nTotal gasto: ${formatarValor(totalGasto)}\n`);

  if (totalGasto <= 124.5) {
    console.log("Pedido perfeito para Gabriel, Rafael, Bruno e Luiza!");
    console.log("Todos vão comer Big Mac + batata + refri, e Gabriel leva um Milkshake!"
    );
  } else {
    console.log("O valor não bate com o pedido planejado (R$124,50).");
  }
}


function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}