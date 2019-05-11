var quantityNumbers = prompt ("Введите максимальное значение: ", ""); 
var a = 1;
var b = 2; 
var summ = 3; 
var c; 

for (var i = 0; i < quantityNumbers - 2; i++) {
    c = a;
    a = b;  
    b = c + b; 
    summ += b;

}
alert (summ);