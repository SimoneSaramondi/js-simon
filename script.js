/*
Un alert() espone 5 numeri generati casualmente.

Da li parte un timer di 30 secondi.

Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// CREAZIONE NUMERI RANDOM CON VISIONE TRAMITE ALERT
var numeriRandom = [];

function numRand(){
    return Math.floor(Math.random() * 10 ) + 1;
}

var i = 0;
while(numeriRandom.length < 5){
    var numeroRandom = numRand();
    if(numeriRandom.indexOf(numeroRandom) === -1){
        numeriRandom.push(numeroRandom);
        i++;
    }
}

alert(numeriRandom);

// TIMER DI TOT (30) SECONDI 
var secondi = 5;
var h1Element = document.getElementById("timer");
var numeriUomo = [];

var clock = setInterval(function() {
    if (secondi === 0) {
        clearInterval(clock);

        // INPUT NUMERI UTENTE
        for(var i = 0; i < numeriRandom.length; i++){
            var number = parseInt(prompt("Inserisci il numero che ti ricordi"));
            numeriUomo.push(number);
        }
        //console.log(numeriUomo)
        h1Element.innerHTML = "I numeri del pc sono " + numeriRandom + "<br>";
        //console.log(numeriRandom);
        h1Element.innerHTML += "I numeri inseriti da te sono " + numeriUomo + "<br>";

        h1Element.innerHTML += "Avete in comune " + checkArrayHow(numeriRandom, numeriUomo) + " valori <br>";
        h1Element.innerHTML += "I valori condivisi sono: " + checkArrayWho(numeriRandom, numeriUomo);

    } else {
        secondi--;
        h1Element.innerHTML = "Mancano " + secondi + " secondi.";
        console.log("Mancano " + secondi + " secondi.");
    }
}, 1000)

// CONTROLLO TRA ARRAY DI QUANTI VALORI
function checkArrayHow( first, second ){

    var cont = 0;

    for(var i = 0; i < first.length; i++){
            if(second.includes(first[i])){
                cont++;
            }
    }
    return cont;
}

// CONTROLLO TRA ARRAY DI QUALI VALORI
function checkArrayWho( first, second ){

    var same = [];
    var k = 0;

    for(var i = 0; i < first.length; i++){
        for(var j = 0; j < second.length; j++){
            if(first[j] === second[i]){
                same[k] = first[j];
                k++;
            }
        }
    }
    return same;
}
