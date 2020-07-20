// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla",
// se clicchiamo su annulla dobbiamo ripulire il form.


var genera = document.getElementById("btn1");


genera.addEventListener("click",
function () {
  document.getElementById("biglietto").className = "show";


  var nome = document.getElementById("nome").value;
  document.getElementById("nome-passeggero").innerHTML = nome;


  var carrozza = generaRandom(1,10);
  var codiceCp = generaRandom(90000,100000);
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("codice-cp").innerHTML = codiceCp;


  var km = document.getElementById("km").value;
  var prezzo = km * 0.21;
  var messaggio = "Tariffa Standart";


  var eta = document.getElementById("fascia-eta").value;

  if (eta == "Minorenne") {
    prezzo -= prezzo * 0.2;
    messaggio = "Tariffa Minorenne";
  } else if (eta == "Over") {
    prezzo -= prezzo * 0.4;
    messaggio = "Tariffa Silver";
  }

  document.getElementById("offerta2").innerHTML = messaggio;
  document.getElementById("costo2").innerHTML = prezzo.toFixed(2);


}
);

var annulla = document.getElementById("btn2");

annulla.addEventListener("click",
function () {
  document.getElementById("biglietto").className = "hidden";
}
);

function generaRandom(min,max) {
  return Math.floor(Math.random()*(max - min) + min);
}
