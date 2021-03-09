$(document).ready(function() {

    var listaNumeriCasuali = [];
    var listaNumeriPrompt = [];
    var numeroCasuale;
    var numeroPrompt;

    for (var i = 0; i < 5; i++) {
        numeroCasuale = genNumeriCasuali(1, 50);
        console.log(numeroCasuale);
        listaNumeriCasuali.push(numeroCasuale);
    }
    console.log(listaNumeriCasuali);
    alert("Cerca di memorizzare questi cinque numeri: " + listaNumeriCasuali);

    setTimeout(function() {
    for (var i = 0; i < 5; i++) {
        numeroPrompt = parseInt(prompt("Inserisci di seguito i numeri che ricordi"));
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