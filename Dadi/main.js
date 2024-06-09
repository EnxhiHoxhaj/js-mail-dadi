//Gioco dei: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genera numero random per il giocatore
const mioNumero = Math.floor(Math.random()*10);
campoGiocatore = mioNumero;
// genera numore random per il computer
const pcNumero = Math.floor(Math.random()*10);
console.log(mioNumero, pcNumero);
// stabilire chi ha il numero maggiore

// se il giocatore ha il numero maggiore ha vinto

//se pc ha numero maggiore il gicatore ha perso