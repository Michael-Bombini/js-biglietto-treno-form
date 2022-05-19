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


let sconto = 0 ;
let errore = false ;


const nome = document.getElementById("nome");
const km = document.getElementById("km");
const eta = document.getElementById("eta");


let nomeV = "";
let kmV = 0 ;
let etaV = 0 ;


const nomePasseggero = document.getElementById("nomePasseggero");
const tipoBiglietto = document.getElementById("tipoBiglietto");
const carrozza = document.getElementById("carrozza");
const codiceCP = document.getElementById("codiceCP");
const costoBiglietto = document.getElementById("costoBiglietto");

let randomCP = 0 ;
let randomCarrozza = 0 ;

let costoV ;



const bigliettoGenerato = document.querySelector(".bigliettoGenerato");



//dichiarazione variabile genera e specifico evento sul click di creazione del biglietto
const genera = document.querySelector("#genera");
genera.addEventListener("click" , function(){



 

    nomeV = nome.value;
    kmV = parseInt(km.value);
    etaV = eta.value;
    

    randomCP = Math.floor(Math.random()*90000) + 10000; //numero random di 5 cifre
    randomCarrozza = Math.floor(Math.random()*10) + 1 ; //numero random tra 1 e 10 
    

    costoV = kmV * 0.21 ;

    if(nomeV.length <= 0 || isNaN(kmV) || kmV <= 0){
        errore = true;
    }
    



    if(!errore){
 
    if(eta.value === "minorenne")
    {
        sconto = kmV*0.21*0.2;
        
    }
    else if(eta.value === "over65"){
        sconto = kmV*0.21*0.4;
    }

    costoV -= sconto ;
    costoV = costoV.toFixed(2);


    
    bigliettoGenerato.classList.add("mostra");
    bigliettoGenerato.classList.remove("nascondi");


    nomePasseggero.innerHTML = nomeV;
    tipoBiglietto.innerHTML = "biglietto" + " " +  etaV;
    carrozza.innerHTML = randomCarrozza;
    codiceCP.innerHTML = randomCP;
    costoBiglietto.innerHTML = costoV;

    }
    else if(errore){
        let me = document.querySelector(".warning");
        me.classList.add("mostra");
        me.style.display = "block";
      
    }


errore = false;
})


//dichiarazione variabile annulla e specifico evento sul click di eliminazione dei campi
const annulla = document.getElementById("annulla");
annulla.addEventListener("click" , function(){

    bigliettoGenerato.classList.remove("mostra");
    bigliettoGenerato.classList.add("nascondi");
    nome.value = "";
    km.value = "";
    

})



const danger = document.querySelector(".btn-danger");
danger.addEventListener("click" , function(){

    location.reload();
})