//Gioco dei: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//richiamare tutti gli elementi del DOM
let risultato;
// genera numero random per il giocatore
const mioNumero = Math.floor(Math.random()*7);
campoGiocatore = mioNumero;
// genera numore random per il computer
const pcNumero = Math.floor(Math.random()*7);
console.log(mioNumero, pcNumero);
// stabilire chi ha il numero maggiore
if (mioNumero > pcNumero) { // se il giocatore ha il numero maggiore ha vinto
    risultato = ("Hai vinto");
} else if ( mioNumero === pcNumero) { //il numero il pari quindi pareggio
    risultato = ("Pareggio!"); 
} else { //se pc ha numero maggiore il gicatore ha perso
    risultato= ("Hai perso!")
}
console.log(risultato);

// stampo il gioco in pagina

document.getElementById("giocarore").innerHTML = mioNumero;
document.getElementById("pc").innerHTML = pcNumero;
document.getElementById("vincitore").innerHTML = risultato;

