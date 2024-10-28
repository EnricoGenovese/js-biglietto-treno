/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
   Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// 1 - Define known variables

const pricePerKm = 0.21;

const juniorDiscount = 20;
const maxJuniorAge = 18;

const seniorDiscount = 40;
const minSeniorAge = 65;

// 2 - Define unknow variables

let ticketKm;
let ticketPrice;

let userAge;

let discount;
let ticketDiscounted;

// 3 - Define user inputs

ticketKm = parseInt(prompt("Inserire i Km del viaggio"));
console.log(ticketKm);

userAge = parseInt(prompt("Inserire l'età del passeggero"));
console.log(userAge);

// 4 - Calculate ticket price

ticketPrice = ticketKm * pricePerKm;


// 5 - Apply discount and output final price in human numbers

if (userAge <= maxJuniorAge) {
    discount = ((ticketPrice * juniorDiscount) / 100);
    ticketDiscounted = ticketPrice - discount;
    console.log(`Il prezzo del tuo biglietto scontato è: ${ticketDiscounted.toFixed(2)}€`);
}  else if (userAge >= minSeniorAge) {
    discount =((ticketPrice * seniorDiscount) / 100);
    ticketDiscounted = ticketPrice - discount;
    console.log(`Il prezzo del tuo biglietto scontato è: ${ticketDiscounted.toFixed(2)}€`)
} else {
    console.log(`Il prezzo del tuo biglietto è: ${ticketPrice.toFixed(2)}€`);
}

