'use strict';
var a = prompt ("Введите значение: ", ""); 
var finishMassive = [1, ]; 


nextPrime:
	for ( var i = 2; i < a; i++ ) {
		for ( var j = 2; j < i; j++ ) {
			if ( i % j == 0 ) continue nextPrime;  
		}
		if ( a % i == 0 ) {
			finishMassive.push(i); 
		}
	}

alert ( finishMassive[finishMassive.length - 1] ); 



 