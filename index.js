onsole.log("------LISTA DE COMPRAS------");

let lista = []

let contador = true;
while (contador == true){
    const opcao = Number(prompt("\nDigite uma opção:\n1 - Adicionar um item;\n2 - Remover um item;\n3 - Pesquisar item;\n4 - Ordenar a lista\n5 - Exibir lista;\n6 - Limpar a lista;\n7 - Encerrar programa.\n"));
    if (opcao == 1){
        const addproduto = prompt("Qual produto você deseja adicionar?\n ")
        lista.push(addproduto)
        console.log(lista)
        
}
    else if (opcao == 2){
        const removproduto = prompt("Qual produto que você deseja remover?\n").trim();
        lista.splice(lista.indexOf(removproduto),1);
        console.log(lista)
       
    }
    else if (opcao == 3){
        const pesqproduto = prompt("Qual produto que você deseja pesquisar?\n");
        if ((lista.includes(pesqproduto)) == true){
            console.log("O produto pesquisado está lista.")
        } else {
            console.log("O produto pesquisado não está na lista.")
        }
    }
    else if (opcao == 4){
        console.log(lista.sort((a, b) => a.localeCompare(b)));
    }
    else if (opcao == 5){
        console.log(lista)
    }
    else if (opcao == 6){
        lista.splice(0,lista.length)
        console.log(lista)
    }
    else if (opcao == 7){
        console.log("Obrigado por usar o sistema! :)")
        break 
    }
}