/*

Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
    nome e cognome
    km da percorrere
    eta 

sulla base di essi si calcolerà il prezzo basandosi su:
    -0.21€ al km 
    -20% < 18 minorenni
    -40% > 65 anni over 65
    -l'output deve essere in max 2 decimali es  : 10.18€ 

Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi

BONUS :

la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
Questo compare solo se i dati inseriti sono validi
per l’età inserire una select con 3 voci:
minorenne
maggiorenne
over 65
In base alla voce scelta dall’utente, fare i dovuti calcoli
il responsive è opzionale!!!!
*/




const prezzoAlKm = 0.21;
let km ;
let eta ;
let totale = prezzoAlKm * km ;
let sconto = 0 ;
let errore = false ;

const minKm = 10 ;
const maxKm = 200; 

const nomeCognome = document.getElementById("nome");



const genera = document.querySelector("#genera");
genera.addEventListener("click" , function(){

const nascosto = document.querySelector(".nascondi");
nascosto.classList.replace("nascondi" , "mostra");

})
