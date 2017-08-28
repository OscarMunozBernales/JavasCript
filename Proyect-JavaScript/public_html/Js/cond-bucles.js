/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*CONDICION IF*/
console.log("CONDICION IF");
if (true == false) {
    console.log("ES VERDADERO");
} else {
    console.log("true == false ES FALSO");
}

if (2 == 2) {
    console.log("2 == 2 ES VERDADERO");
} else {
    console.log("2 == 2 ES FALSO");
}

if ('a' == 'b') {
    console.log("'a' == 'b' ES VERDADERO");
} else {
    console.log("'a' == 'b' ES FALSO");
}

/*CONDICION SWITCH*/
var nombre = 'oscar';
console.log("CONDICION SWITCH");
switch (nombre) {
    case('oscar'):
        console.log('nombre: ' + nombre);
        break;
    case('bruno'):
        console.log('nombre: ' + nombre);
        break;
}

/*CICLO WHILE*/
console.log("CICLO WHILE");
var contador = 1;
while (contador <= 20) {
    console.log("CONTADOR: " + contador);
    contador++;
}

/*CICLO FOR*/
console.log("CICLO FOR");
nombres = ['OSCAR', 'BRUNO', 'MARISOL', 'EDUARDO'];
for (var i = 0; i < 20; i++) {
    switch (nombres[i]) {
        case('OSCAR'):
            console.log('nombre: ' + nombres[i]);
            break;
        case'BRUNO':
            console.log('nombre: ' + nombres[i]);
            break;
        case 'MARISOL':
            console.log('nombre: ' + nombres[i]);
            break;
        case 'EDUARDO':
            console.log('nombre: ' + nombres[i]);
            break;
    }
}
