'use strict';



function wypisanie (event) {
	
event.preventDefault();	
	var kaja = document.getElementById("form").childNodes;
	kaja.forEach(function(element, i){
		
		if (element.id == "imie") {
    		console.log(element.value);
		} else if (element.id =="nazwisko") {
    		console.log(element.value);
		}		  
	});
	
}
document.getElementById("przycisk").addEventListener('click', wypisanie);




