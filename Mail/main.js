//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let yourEmail = prompt ("Insert your e-mail?");
console.log (yourEmail);
document.querySelector(".mail").innerHTML= yourEmail;

//selezione il bottone dal DOM

const myButton = document.querySelector("button");

//creo la mia lista di e-mail che hanno accesso alla mia pagina

const iscritti = ["lorem@gmail.com", "lorem@hotmail.it", "dolorem.est@gmail.it", "ciccio.pasticcio@live.it", "fragola86@outlook.it", "banana33@libero.it", "mario.rossi@rrr.it", "estate24@forse.com"];

console.log(iscritti);

//gestione evento invio

myButton.addEventListener("click",
    // al click il programma cerca se la email è tra gli elementi array
    function () {
        for (let i = 0; i < iscritti.length; i++){
            const printRis = document.querySelector(".risultato");
            //se è tra gli elementi dai il benvenuto
        } if (yourEmail === iscritti.length) {
            printRis= "benventui";
        } else {
            printRis = "Accesso negato";
        }
        console.log(printRis);
    }
);
// stampo in pagina se l'utente ha accosso o meno alla pagina

