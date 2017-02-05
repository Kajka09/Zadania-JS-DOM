'use strict';
 
var newElement = document.createElement ('p');
var newElementTekst = document.createTextNode ('Tekst paragrafu drugiego');

newElement.appendChild(newElementTekst);

document.body.insertBefore(newElement,document.body.children[1].nextSibling );


function ustaw_tlo() {
	console.log('kliknieto w przycisk');
    var pierwszyParagraf = document.body.children[1];
	var drugiParagraf = document.body.children[2];
	pierwszyParagraf.style.backgroundColor = "red";
	drugiParagraf.style.backgroundColor = "green";
}