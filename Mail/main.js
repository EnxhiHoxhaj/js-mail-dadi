//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let yourEmail = prompt ("Insert your e-mail?");

console.log (yourEmail);

document.querySelector(".mail").innerHTML= yourEmail;


//selezione il bottone dal DOM

const myButton = document.querySelector("button");
const printRis = document.querySelector(".risultato")


//creo la mia lista di e-mail che hanno accesso alla mia pagina

const iscritti = ["lorem@gmail.com", "lorem@haomail.it", "dolorem.est@gmail.it", "ciccio.pasticcio@live.it", "fragola86@outlook.it", "banana33@libero.it"];

//creo in ciclo di controllo della e-mail inserita dall'utente

// stampo in pagina se l'utente ha accosso o meno alla pagina

