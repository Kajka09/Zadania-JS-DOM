'use strict';

function oblicz (event) {
	event.preventDefault();	
	
	var wplata = parseInt(document.getElementById("wplataPLN").value);
	console.log(wplata);
	
	var iloscLat = parseInt(document.getElementById("iloscLat").value);
	console.log(iloscLat);
	
	var okresKapitalizacji = parseInt(document.getElementById("okresKapitalizacji").value);
	console.log(okresKapitalizacji);
	
	var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
	console.log(oprocentowanie);
	
	var podatek = document.getElementById("podatek").checked;
	console.log(podatek);
	
	var wynik = function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
		
	}
	
	
	
}
document.getElementById("przycisk").addEventListener('click', oblicz);