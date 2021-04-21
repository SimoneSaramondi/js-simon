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

for(var i = 0; i < 5; i++){
    numeriRandom[i] = numRand();
}

alert(numeriRandom);

// TIMER DI TOT (30) SECONDI 
