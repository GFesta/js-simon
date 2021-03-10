// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati.

$(document).ready(function() {

    var listaNumeriCasuali = [];
    var listaNumeriPrompt = [];
    var numeroCasuale;
    var numeroPrompt;

    //genero 5 numeri casuali
    for (var i = 0; i < 5; i++) {
        numeroCasuale = genNumeriCasuali(1, 50);
        console.log(numeroCasuale);
        listaNumeriCasuali.push(numeroCasuale);
    }
    console.log(listaNumeriCasuali);
    alert("Cerca di memorizzare questi cinque numeri: " + listaNumeriCasuali);

    //timer - dopo 30 secondi, richiedo di inserire i numeri ricordati
    setTimeout(function() {
    for (var i = 0; i < 5; i++) {
        numeroPrompt = parseInt(prompt("Inserisci di seguito i numeri che ricordi"));

        //analizzo i numeri inseriti
            for (var f = 0; f < listaNumeriCasuali.length; f++) {
                if (numeroPrompt == listaNumeriCasuali[f]) {
                listaNumeriPrompt.push(numeroPrompt);
                }
            }
        }
        //document.getElementById("numeri-indovinati").innerHTML = "Hai indovinato " + listaNumeriPrompt.length + " numeri. Rispettivamente i numeri: " + listaNumeriPrompt;
        alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Rispettivamente i numeri: " + listaNumeriPrompt)
        console.log(listaNumeriPrompt)
    }, 30000)

});

//richiamo o invoco la funzione  "genNumeriCasuali"
function genNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//-------------------------------------------------------------------
//ALTRA SOLUZIONE
var rndNumber = [];
var min = 1;
var max = 100;

while (rndNumber.length < 5) {
    var newRandomNumber = getRndInteger(min,max);

    if (!rndNumber.includes(newRandomNumber ) ) {
        rndNumber.push(newRandomNumber);
    }
}
alert(rndNumber);

setTimeout(function() {
    var userNumbers = [];

    while (userNumbers.length < 5) {
        var newUserNumber = parseInt(prompt("inserisci un numero"));

        if (userNumbers.includes(newUserNumber) == false) {
            userNumbers.push(newUserNumber);
        }
    }
    var indovinati = [];

    for (var i = 0; i < userNumbers.length; i++) {
        if (rndNumbers.includes(userNumbers[i]))
        indovinati.push(userNumbers[i]);
    }

    alert("hai ricordato" + indovinati.length + "numeri che sono" +indovinati);


}, 5000);

//FUNZIONI
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
