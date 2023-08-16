class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let i = 0;
        let valorItem = 0;
        let valorTotal = 0;
        let pagamento = 0;
        let erroPagamento = false;
        let tipoDeErro = 0;
        let principalCafe = 0;
        let principalSanduiche = 0;
        let extraQueijo = 0;
        let extraChantily = 0;
        let resultado = 0;


        if (itens.length === 0) {
            resultado = "Não há itens no carrinho de compra!"
        } else {
            while (i < itens.length) {
                let itemA = itens[i].toString();
                let itemB = itemA.split(',');
                let valor = 0;
        
                switch (itemB[0]) {
                    case "cafe":
                        valor = 300;
                        principalCafe++;
                        break;
                    case "suco":
                        valor = 620;
                        break;
                    case "sanduiche":
                        valor = 650;
                        principalSanduiche++;
                        break;
                    case "salgado":
                        valor = 725;
                        break;
                    case "combo1":
                        valor = 950;
                        break;
                    case "combo2":
                        valor = 750;
                        break;
                    case "queijo":
                        valor = 200;
                        extraQueijo++;
                        break;
                    case "chantily":
                        valor = 150;
                        extraChantily++;
                        break;
                    case "":
                        tipoDeErro = "erro_a";
                        break;
                    default:
                        tipoDeErro = "erro_b";
                        break;
                }
                let quant = Number(itemB[1])
            
                if (quant == 0) {
                    tipoDeErro = "erro_c";
                    break;
                } else {
                    valorItem = quant * valor;
                    valorTotal += valorItem; 
                    i++;
                }    
            }
            if ((principalCafe === 0 && extraChantily > 0) || (principalSanduiche === 0 && extraQueijo > 0)) {
                resultado = "Item extra não pode ser pedido sem o principal";
            } else {
                if (tipoDeErro === "erro_a") {
                    resultado = "Não há itens no carrinho de compra!"
                } else if (tipoDeErro === "erro_b") {
                    resultado = "Item inválido!"
                } else if (tipoDeErro === "erro_c") {
                    resultado = "Quantidade inválida!"
                } else {
                    if (metodoDePagamento === "dinheiro") {
                        pagamento = valorTotal * 0.95
                    } else if (metodoDePagamento === "credito") {
                        pagamento = valorTotal * 1.03
                    } else if (metodoDePagamento === "debito") {
                        pagamento = valorTotal
                    } else {
                        erroPagamento = true;
                    }
        
                    if (erroPagamento != false) {
                        resultado = "Forma de pagamento inválida!";
                    } else {
                        resultado = "R$ " + (((pagamento / 100).toFixed(2)).replace('.', ',')).toString();
                    }
                }
            }
        }

        return (resultado);
    }

}

export { CaixaDaLanchonete };
