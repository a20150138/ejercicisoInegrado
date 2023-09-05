alert("Pase el precio de la comida que pediste");
var nun1 =parseInt(prompt("Ingrese el costo de la entrada"));
var nun2 =parseInt(prompt("Ingrese el costo del segundo"));
var nun3 =parseInt(prompt("Ingrese el costo del postre"));
alert("Ahora presione F12 para ver el resultado");

//consola
console.log ("El costo de la entrada es:"+nun1);
console.log ("El costo del segundo es:"+nun2);
console.log ("El costo del postre es:"+nun3);
//total
var total = nun1 + nun2 + nun3
console.log ("El total de la comida es: "+total)
//igv
var igv = total * 0.18;
console.log("IGV: ",igv);

var tol = total + igv;
console.log("TOTAL A PAGAR: ",tol)