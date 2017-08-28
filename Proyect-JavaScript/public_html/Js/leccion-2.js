/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_de_asignación
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
 */
/*OPERADORES DE ASIGNACION
 * Operador de asignacion:          x = y    => el valor de y se le asigna a x
 * Asignacion de adicion:           x += y   => el valor de x + y se le asigna a la variable x
 * Asignacion de sustraccion:       x -= y   => el valor de x - y se le asigna a la variable x
 * Asignacion de multiplicacion:    x *= y   => el valor de x * y se le asigna a la variable x
 * Asginacion de division:          x /= y   => el valor de x / y se le asigna a la variable x
 * Asignacion de resto:             x %= y   => el valor de x % y se le asigna a la variable x
 * A. desplazamiento izquierda:     x <<= y  => el valor de x se desplaza y veces a la isquierda (binario)
 * A. desplazamiento derecha:       x >>= y  => el valor de x se desplaza y veces a la derecha (binario)
 * A. AND binaria:                  x &= y   => el valor de x queda como bool al comprar x == y
 * A. XOR binaria:                  x ^= y   => el valor de x queda como bool al comprar x <-> y
 * A. OR binaria                    x |= y   => el valor de x queda como bool al comprar x || y
 * */

var x = 5;
function asignacion(y){
    x = y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function adicion(y){
    x += y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function sustraccion(y){
    x -= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function multiplicacion(y){
    x *= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function division(y){
    x /= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function resto(y){
    x %= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function despIzquierda(y){
    x <<= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

function despDerecha(y){
    x >>= y;
    alert('el valor de x es: ' + x);
    x = 5;
}

/*OPERADORES DE COMPARACION
 * IGUALDAD                 X == Y      =>  DEVUELVE TRUE SI X ES IGUAL A Y
 * DESIGUALDAD              X != Y      =>  DEVUELVE TRUE SI X ES DISTINTO DE Y
 * ESTRICTAMENTE IGUALES    X === Y     =>  DEVUELVE TRUE SI X ES IGUAL A Y, ADEMAS SI SON DEL MISMO TIPO
 * ESTRICTAMENTE DESIGUALES X !== Y     =>  DEVUELVE TRUE SI X ES DESIGUAL A Y, Y/O NO SON DEL MISMO TIPO
 * MAYOR QUE                X > Y       =>  DEVUELVE TRUE SI X ES MAYOR QUE Y
 * MAYOR O IGUAL QUE        X >= Y      =>  DEVUELVE TRUE SI X ES MAYOR O IGUAL A Y
 * MENOR QUE                X < Y       =>  DEVUELVE TRUE SI X ES MENOR QUE Y
 * MENOR O IGUAL QUE        X <= Y      =>  DEVUELVE TRUE SI X ES MENOR O IGUAL QUE Y
 * */

x = 6;
function igualdad(y){
    alert(x == y);
}

function desigualdad(y){
    alert(x != y);
}

function estricamentei(y){
    alert(x === y);
}

function estricamented(y){
    alert(x !== y);
}

function mayor(y){
    alert("Mayor que: " + x > y + "\n Mayor o igual que: " + x >= y);
}

function menor(y){
    alert("Menor que: " + x < y + "\n Menor o igual que: " + x <= y);
}

/*LIBRERIA MATH
 *  Math.abs(x) =>  Devuelve el valor absoluto de un número.
 *  Math.acos(x)=>  Devuelve el arco coseno de un número.
 *  Math.acosh(x) => Devuelve el arco coseno hiperbólico de un número.
 *  Math.asin(x) =>Devuelve el arco seno de un número.
 *  Math.asinh(x) => Devuelve el arco seno hiperbólico de un número.
 *  Math.atan(x) => Devuelve el arco tangente de un número.
 *  Math.atanh(x) => Devuelve el arco tangente hiperbólico de un número.
 *  Math.atan2(y, x) =>Devuelve el arco tangente del cuociente de sus argumentos.
 *  Math.cbrt(x) => Devuelve la raíz cúbica de un número.
 *  Math.ceil(x) => Devuelve el entero más pequeño mayor o igual que un número.
 *  Math.clz32(x) => Devuelve el número de ceros iniciales de un entero de 32 bits.
 *  Math.cos(x) => Devuelve el coseno de un número.
 *  Math.cosh(x) => Devuelve el coseno hiperbólico de un número.
 *  Math.exp(x) => Devuelve ex, donde x es el argumento, y e es la constante de Euler (2.718...), la base de los logaritmos naturales.
 *  Math.expm1(x) => Las devoluciones restando 1 exp (x)
 *  Math.floor(x) => Devuelve el mayor entero menor que o igual a un número.
 *  Math.fround(x) => Devuelve la representación flotante de precisión simple más cercana de un número.
 *  Math.imul(x, y) => Devuelve el resultado de una multiplicación de enteros de 32 bits.
 *  Math.log(x) => Devuelve el logaritmo natural (log, también ln) de un número.
 *  Math.log1p(x) => Devuelve el logaritmo natural de x + 1 (loge, también ln) de un número.
 *  Math.log10(x) => Devuelve el logaritmo en base 10 de x.
 *  Math.log2(x) => Devuelve el logaritmo en base 2 de x.
 *  Math.pow(x, y) => Las devoluciones de base a la potencia de exponente, que es, baseexponent.
 *  Math.random() => Devuelve un número pseudo-aleatorio entre 0 y 1.
 *  Math.round(x) => Devuelve el valor de un número redondeado al número entero más cercano.
 *  Math.sign(x) => Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
 *  Math.sin(x) => Devuelve el seno de un número.
 *  Math.sinh(x) => Devuelve el seno hiperbólico de un número.
 *  Math.sqrt(x) => Devuelve la raíz cuadrada positiva de un número.
 *  Math.tan(x) => Devuelve la tangente de un número.
 *  Math.tanh(x) => Devuelve la tangente hiperbólica de un número.
 *  Math.toSource() => Devuelve la cadena "Matemáticas".
 *  Math.trunc(x) => Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
 * */