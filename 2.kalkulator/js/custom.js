'use strict';
 
function kliknietoAC(val) {
	document.getElementById("wyswietl").value = val;
}

function kliknietoCyfre(val) {
	document.getElementById("wyswietl").value += val;
}

function kliknietoOperator(val) {
	document.getElementById("wyswietl").value += val;
}
function kliknietoKropke(val) {
	document.getElementById("wyswietl").value += val;
}

function kliknietoRowna() {
	try {								       			
		kliknietoAC(eval(document.getElementById("wyswietl").value));
	}
	catch(kliknietoRowna) {
		kliknietoAC('Error');
		}
}