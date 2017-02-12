'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	var podatek = document.getElementById("podatek").checked;
	console.log(podatek);
	var oprocentowanieOpodatkowane = 0;
	if (podatek) {
		oprocentowanieOpodatkowane=oprocentowanie - 19/100*oprocentowanie;
	} else {
		oprocentowanieOpodatkowane=oprocentowanie;
	}
		
	var kapital = wplata *Math.pow( ( 1+(oprocentowanieOpodatkowane/okresKapitalizacji) ), (iloscLat*okresKapitalizacji) );
	
	return kapital.toFixed(2);
}

function oblicz (event) {
	event.preventDefault();	
//	console.log("dziala przycisk");
	
	var wplata = parseInt(document.getElementById("wplataPLN").value);
//	console.log(wplata);
	
	var iloscLat = parseInt(document.getElementById("iloscLat").value);
//	console.log(iloscLat);
//	
	var okresKapitalizacji = parseInt(document.getElementById("okresKapitalizacji").value);
//	console.log(okresKapitalizacji);
//	
	var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
//	console.log(oprocentowanie);
//	}
//	
	var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
	document.getElementById("wynik").innerHTML = wynik;
}
document.getElementById("przycisk").addEventListener('click', oblicz);

