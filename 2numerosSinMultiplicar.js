//Request a user two numbers and show the result of multiplying them.
let value1 = prompt("Ingrese el primer valor: ");
let value2 = prompt("Ingrese el segundo valor: ");

//Convert value1 and value2 to number
value1 = parseFloat(value1);
value2 = parseFloat(value2);

let result = 0;

//Loop value2 for sum value1 on result
for(let i = 0; i < value2; i++){
    result += value1;
}

console.log("El resultado es: "+result);