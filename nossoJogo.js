/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
*/

console.log("Boas vindas ao jogo de BlackJack!");

const querJogar = confirm("Quer iniciar uma nova rodada?");

if(querJogar === false){
   console.log("O jogo foi encerrado!")
}else{
   // Testando >> console.log("O jogo começou!")
   // console.log(carta.texto);
   // console.log(carta.valor)
   const usuario = comprarCarta();
   const computador = comprarCarta();

   let usuarioValor = usuario.valor + usuario.valor;
   let computadorValor = computador.valor + computador.valor;

   console.log(`Usuário - Cartas:${usuario.texto} ${usuario.texto} - Pontuação ${usuarioValor}`);
   console.log(`Computador - Cartas:${computador.texto} ${computador.texto} - Pontuação ${computadorValor}`);
   
   if(usuarioValor === computadorValor){
      console.log("Empate!")
   }else if(usuarioValor < computadorValor && computadorValor <= 21){
      console.log("O computador ganhou!")
   }else if (usuarioValor < computadorValor && computadorValor > 21){
      console.log("O usuário ganhou!")
   }else if(usuarioValor > computadorValor && usuarioValor <= 21) {
      console.log("O usuário ganhou!")
   }else if(usuarioValor > computadorValor && usuarioValor > 21){
      console.log("O computador ganhou!")
   }else{
      console.log("ERRO!!")
   }
}