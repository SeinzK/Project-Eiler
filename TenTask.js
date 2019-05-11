var a = prompt ("Ввдеите значение: ", "")
var primeNumbers = [1, ]; 
var summ = 0;
nextPrime:
	for ( var i = 2; i < a; i++) {
		for ( var j = 2; j < i; j++) {
			if ( i % j == 0 ) continue nextPrime;
		}
		summ += i;

	}
alert ( summ );