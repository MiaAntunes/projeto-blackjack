function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]

   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]

   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]

   let valor

   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
   }

   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
      texto: numero + naipe,
      valor: valor
   }

   return carta
}

let telaInicialDoJogo = confirm("Bem vinde ao Jogo \nQuer iniciar um nova jogada?");
while (telaInicialDoJogo) {

   if (telaInicialDoJogo === false) {
   } else {
      let cartaUsuario = [comprarCarta(), comprarCarta()]
      let cartaComputador = [comprarCarta(), comprarCarta()]

      // Não esquece de tirar depois --------------
      console.log("Cartas Usuarios ", cartaUsuario[0].texto, cartaUsuario[1].texto)
      console.log("Cartas Computador ", cartaComputador[0].texto, cartaComputador[1].texto)

      let excessaoCartasUsuario = cartaUsuario[0].texto === "A" && cartaUsuario[1].texto === "A";
      let excessaoCartasComputador = cartaComputador[0].texto === "A" && cartaComputador[1].texto === "A"

      // Não esquece de tirar depois --------------
      console.log("Sabe se as Cartas sairam 'A' ", excessaoCartasComputador, excessaoCartasUsuario)

      if (excessaoCartasUsuario || excessaoCartasComputador) {
         while (excessaoCartasUsuario || excessaoCartasComputador) {
            cartaUsuario.pop();
            cartaUsuario.push(comprarCarta()) // Ficar Atenta
            cartaComputador.pop();
            cartaComputador.push(comprarCarta())
         }
      } else {
         let confirmarNovaCarta = confirm(`Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} . A carta revelada do computador é ${cartaComputador[0].texto} \nDeseja comprar mais uma carta?`)
         // Não esquece de tirar depois --------------
         console.log("Para saber se o usuário quer ou não ", confirmarNovaCarta)

         // [X] muda pra consumir as cartas com um laço (for, for of, map)
         let somaCartasUsuario = cartaUsuario.map(() => {
            let somarArray = cartaUsuario[0].valor + cartaUsuario[1].valor
            return somarArray
         })
         let somaCartasComputador = cartaComputador.map(function somar() {
            let somarArray = cartaComputador[0].valor + cartaComputador[1].valor
            return somarArray
         })
         console.log("Pontuação Usuario: ", somaCartasUsuario[0])// Não esquece de colocar issooo !!!!
         console.log("Pontuação Comp: ", somaCartasComputador[0]) // Não esquece de colocar issooo !!!!

         let cartaUsuarioX = []
         let cartaComputadorX = []
         let finalDeJogo
         let mensagemCartasUsuario
         let mensagemCartasComputador
         let i = 0

         while (somaCartasUsuario[0] <= 21 && somaCartasComputador[0] <= 21) {
            if (confirmarNovaCarta === false) {
               finalDeJogo = alert(`Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto}. Sua pontuação é de ${somaCartasUsuario[0]} \nAs cartas do computador é ${cartaComputador[0].texto} ${cartaComputador[1].texto}. A pontuação do computador é ${somaCartasComputador[0]}`)

               // ! Retirar depois
               console.log(finalDeJogo)
               break;

            } else { 
               // REFAZER 
               while (somaCartasUsuario[0] < 21) {
                  cartaUsuarioX.push(comprarCarta())

                  // ! Loop para as cartas do Usuario
                  for (let i = 0; i < cartaUsuarioX.length; i++) {
                     mensagemCartasUsuario += cartaUsuarioX[i].texto;
                  }
                  // ! Loop para as cartas do Usuario
                  for (let i = 0; i < cartaComputadorX.length; i++) {
                     mensagemCartasComputador += cartaComputadorX[i].texto;
                  }

                  for (let i = 0; i <= cartaUsuarioX.length; i++) {
                     somaCartasUsuario[0] = somaCartasUsuario[0] + cartaUsuarioX[i].valor

                     confirmarNovaCarta = confirm(`Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} ${cartaUsuarioX[i].texto} . A carta revelada do computador é ${cartaComputador[0].texto} \nDeseja comprar mais uma carta?`)

                     i++
                  }
                  break
               }
               while (somaCartasComputador[0] < 21) {
                  cartaComputadorX.push(comprarCarta())

                  for (let i = 0; i <= cartaComputadorX.length; i++) {
                     somaCartasComputador[0] = somaCartasComputador[0] + cartaComputadorX[i].valor
                     i++
                  }
                  break
               }

               finalDeJogo = alert(`Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} ${mensagemCartasUsuario}. Sua pontuação é de ${somaCartasUsuario[0]} \nAs cartas do computador é ${cartaComputador[0].texto} ${cartaComputador[1].texto} ${mensagemCartasComputador}. A pontuação do computador é ${somaCartasComputador[0]}`)

               console.log("Usuario :", cartaUsuario[0].texto, cartaUsuario[1].texto, cartaUsuarioX[i].texto)
            }
         }
         if (somaCartasUsuario[0] > somaCartasComputador[0] && somaCartasUsuario[0] <= 21) {
            finalDeJogo += alert(`O usuário ganhou!`)
            console.log("O usuário ganhou!")
         } else if (somaCartasComputador[0] > somaCartasUsuario[0] && somaCartasComputador[0] <= 21) {
            finalDeJogo += alert(`O computador ganhou!`)
            console.log("O computador ganhou!")
         } else if (somaCartasUsuario[0] < somaCartasComputador[0] && somaCartasComputador[0] > 21) {
            finalDeJogo += alert(`O usuário ganhou!`)
            console.log("O usuário ganhou!")
         } else if (somaCartasComputador[0] < somaCartasUsuario[0] && somaCartasUsuario[0] > 21) {
            finalDeJogo += alert(`O computador ganhou!`)
            console.log("O computador ganhou!")
         } else if (somaCartasUsuario[0] === somaCartasComputador[0] && somaCartasUsuario[0] <= 21) {
            finalDeJogo += alert(`Empate!`)
            console.log("Empate!")
         } else if (somaCartasUsuario[0] === somaCartasComputador[0] && somaCartasUsuario[0] > 21) {
            console.log("Num sei")
            //ÉS O QUE FAZER !!!!!
         } else {
            console.log("ERRO!")
         }
      }
   }
   telaInicialDoJogo = confirm("Bem vinde ao Jogo \nQuer iniciar um nova jogada?");
}
alert("O Jogo acabou!")

///
// do {
//    telaInicialDoJogo = confirm("Bem vinde ao Jogo \nQuer iniciar um nova jogada?");

//    if (telaInicialDoJogo === false) {
//       break;
//    }
// }
