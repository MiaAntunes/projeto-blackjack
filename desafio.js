let x = 0
while(x < 20){
   const telaInicialDoJogo = confirm("Bem vinde ao Jogo \nQuer iniciar um nova jogada?"); 

if(telaInicialDoJogo === false){
   alert("O Jogo acabou!")
}else{
   let cartaUsuario1 = comprarCarta();
   let cartaUsuario2 = comprarCarta();
   let cartaComputador1 = comprarCarta();
   let cartaComputador2 = comprarCarta();

   const excessaoCartasUsuario = cartaUsuario1.texto === "A" && cartaUsuario2.texto === "A";
   const excessaoCartasComputador = cartaComputador1.texto === "A" && cartaComputador2.texto === "A"

   if(excessaoCartasUsuario || excessaoCartasComputador){
      while(excessaoCartasUsuario|| excessaoCartasComputador){
         cartaUsuario1 = comprarCarta();
         cartaUsuario1 = comprarCarta();
         cartaComputador1 = comprarCarta();
         cartaComputador2 = comprarCarta();
      }
   }else{
      let confirmarNovaCarta = confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} . A carta revelada do computador é ${cartaComputador1.texto} \nDeseja comprar mais uma carta?`)

      console.log(confirmarNovaCarta)

      //"Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22.\\n" + "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20.\\n" + "O computador ganhou!"

      let somaCartasUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      let somaCartasComputador = cartaComputador1.valor + cartaComputador2.valor   
      let cartaUsuarioX
      let cartaComputadorX 
      
      let finalDeJogo

      while(somaCartasUsuario <= 21 && somaCartasComputador <= 21){

         if(confirmarNovaCarta === false){
            finalDeJogo = alert(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é de ${somaCartasUsuario} \nAs cartas do computador é ${cartaComputador1.texto} ${cartaComputador2.texto}. A pontuação do computador é ${somaCartasComputador}`)
            break;
            // console.log(finalDeJogo)

         }else{

            while(somaCartasUsuario < 21 && somaCartasComputador < 21){
               cartaUsuarioX = comprarCarta()
               cartaComputadorX = comprarCarta()

               somaCartasUsuario += cartaUsuarioX.valor
               somaCartasComputador += cartaComputadorX.valor

               console.log("User: ", somaCartasUsuario)
               console.log("Comp: ", somaCartasComputador)
          
               confirmarNovaCarta = confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuarioX.texto}. A carta revelada do computador é ${cartaComputadorX.texto}. Deseja comprar mais uma carta?`) 

               if(somaCartasUsuario > 21 || somaCartasComputador > 21){
                  finalDeJogo = alert(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaComputadorX.texto}. Sua pontuação é de ${somaCartasUsuario} \nAs cartas do computador é ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputadorX.texto}. A pontuação do computador é ${somaCartasComputador}`)
               }
               break

            }
         }
      }

      if(somaCartasUsuario > somaCartasComputador && somaCartasUsuario <= 21 ){
         finalDeJogo += alert(`O usuário ganhou!`)
         console.log("O usuário ganhou!")
      }else if(somaCartasComputador > somaCartasUsuario && somaCartasComputador <= 21 ){
         finalDeJogo += alert(`O computador ganhou!`)
         console.log("O computador ganhou!")
      }else if(somaCartasUsuario < somaCartasComputador && somaCartasComputador > 21){
         finalDeJogo += alert(`O usuário ganhou!`)
         console.log("O usuário ganhou!")
      }else if(somaCartasComputador < somaCartasUsuario && somaCartasUsuario > 21 ){
         finalDeJogo += alert(`O computador ganhou!`)
         console.log("O computador ganhou!")
      }else if(somaCartasUsuario === somaCartasComputador && somaCartasUsuario <= 21 ){
         finalDeJogo += alert(`Empate!`)
         console.log("Empate!")
      }else if(somaCartasUsuario === somaCartasComputador && somaCartasUsuario > 21){
         console.log("Num sei")
         //ÉS O QUE FAZER !!!!!
      } else{
         console.log("ERRO!")
      }
      
   }
}
x++
}

