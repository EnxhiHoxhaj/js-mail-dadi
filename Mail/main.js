//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo il prompt per la richiesta della e-mail del

let inPut = document.querySelector(".mail").value;

let yourEmail = inPut;
console.log(yourEmail);
//selezione il bottone dal DOM

const myButton = document.querySelector("button");
let printRisultato;
//creo la mia lista di e-mail che hanno accesso alla mia pagina*/

const iscritti = ["lorem@gmail.com", "lorem@hotmail.it", "dolorem.est@gmail.it", "ciccio.pasticcio@live.it", "fragola86@outlook.it", "banana33@libero.it", "mario.rossi@rrr.it", "estate24@forse.com"];

//creo un ciclo per vedere la mia lista
for (let i = 0; i < iscritti.length; i++) { 
    console.log(iscritti[i]);
    if (iscritti[i] === yourEmail) { // se la e-mail del visitatore è nell'archivio iscritti si concede l'accesso
        printRisultato = "benvenuta";
    } else  { //altrimenti si nega l'accesso
        printRisultato = "Accesso negato";
    }
    console.log(printRisultato);
}; 

