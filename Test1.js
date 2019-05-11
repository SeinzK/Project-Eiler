'use strict';
var a = prompt ("Введите значение: ", ""); 
var arr = []; 
const b = a; 

for (  var i = a; i > 1; i-- ) {
	if ( b % i == 0 ) {
		for ( var j = (i - 1); j > 0; j--) {
			if ( i % j == 0 )
				arr.push(j);
				break;
		}
	}

}
alert (arr);


 