/*devo creare algoritmo che cerchi le card tramite gli artisti o il genere e mostri il risultato nella schermata principale*/

let card = document.querySelectorAll(".col-6.col-md-4.col-xl-3.col-xxl-3");
let genere = document.querySelectorAll(".card-header");
let albumArtista = document.querySelectorAll("h5");

let descrMrKittyTime = `Avere tra le mani questo prodotto è come avere tra le mani un'anima: etereo, fragile ed evanescente ma, ciò non di meno, presente e persistente. La musica che ci vene presentata da tastiere e synth pare generare un insieme di spiriti antichi, che aleggiando nell'etere, intonano le autodistruttive liriche che compongono i brani di "Time".
Le musiche dei vari pezzi hanno la capacità di prendere vita, creando una straordinaria opposizione tra le musiche dai toni incalzanti e soavi ed i testi che inneggiano ad un macabro amore e ad un'inevitabile auto distruttività. La voce di Forrest Avery Carney presenta una carica emotiva e passionale che non può e non deve lasciare indifferenti: nulla è lasciato al caso, ogni più piccolo suono è fondamentale per comprendere l'album nella sua interezza."`;

let descrMetallicaMasterOfPuppets = `Grazie alle doti compositive dei singoli componenti del gruppo, l'album riesce a ritagliarsi un posto di prima grandezza nel mondo del thrash metal; dalla maggior parte della critica specializzata viene considerato come il miglior album del gruppo, nonché uno dei più riusciti dischi heavy metal di sempre. Come riportò il frontman James Hetfield in varie interviste, venne data una grande attenzione allo spessore e alla potenza del suono delle chitarre, caratteristiche che con il tempo divennero uno dei punti di riferimento per il thrash e non solo; inoltre, il sound innovativo e le strutture musicali delle canzoni presenti in Master of Puppets furono precursori del sottogenere progressive metal, che sarebbe poi esploso negli anni a venire.`;

console.log(card);
console.log(genere);
console.log(albumArtista);

function hide() {
  for (const iterator of card) {
    iterator.style.display = "none";
  }
  console.log("hai lanciato la funzione hide");
}

document.querySelector(".btn").addEventListener("click", cerca);

function cerca() {
  hide();
  let cardTrovate = [];
  let chiaveRicerca = document
    .querySelector(".form-control.me-2")
    .value.toLowerCase();
  console.log(chiaveRicerca);

  for (i = 0; i < genere.length; i++) {
    if (
      genere[i].innerHTML.toLocaleLowerCase().includes(chiaveRicerca) == true ||
      albumArtista[i].innerHTML.toLocaleLowerCase().includes(chiaveRicerca) ==
        true
    ) {
      cardTrovate.push(card[i]);
      card[i].style.display = "block";
    }
  }

  /* if (cardTrovate.length == 1) {
    console.log(cardTrovate[0].outerText);
    if (cardTrovate[0].outerText.toLowerCase().includes("metallica")) {
      let divDescr = document.createElement("div");
      divDescr.classList.add("col-5");
      divDescr.classList.add("card");
      divDescr.style.display = "inline-block";
      divDescr.innerHTML = `${descrMetallicaMasterOfPuppets}`;

      cardTrovate[0].appendChild(divDescr);
    }*/

  console.log(cardTrovate);
}
