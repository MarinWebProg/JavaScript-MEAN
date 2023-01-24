'use strict'
//console.log("Hola mundo con NODEjs");

var params = process.argv.slice(2);
// console.log(params);

var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);
var plantilla=`
    La suma weon es ${num1+num2}
    La resta weon es ${num1-num2}
    La multiplicacion weon es ${num1*num2}
    La division weon es ${num1/num2}
`;

console.log(num1);
console.log(num2);
console.log(plantilla);