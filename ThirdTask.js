'use strict';
var a = prompt ("Введите значение: ", ""); 
var primeMassive = [1, ]; 
var finishMassive = []; 


nextPrime:
	for ( var i = 2; i < a; i++ ) {
		for ( var j = 2; j < i; j++ ) {
			if ( i % j == 0 ) continue nextPrime;  
		}
		primeMassive.push(i);
	}

i = 0;

while ( i <= primeMassive.length) {
	if ( a % primeMassive[i] == 0 ) {
		finishMassive.push(primeMassive[i]); 
		i++;
	}
	else {
		i++; 
	}
}
alert ( finishMassive[finishMassive.length - 1] ); 



 