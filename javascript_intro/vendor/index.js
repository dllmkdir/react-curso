// Javascript static index file
console.log("index")
// Variables
var foo = "esto es una cadena"
console.log("String: " + foo)
var foo2 = 3
console.log("Int: "+ foo2)
var foo3 = 190.2
console.log("Float: "+foo3)
var foo4 =[1,2,3,4,5]
console.log("Array: "+foo4)
console.log(foo4[1])
var foo5 = {"a":3, "b":"otro valor","c":3.0} 
console.log("JSON")
console.log(foo5)
console.log(foo5.b)
console.log(foo5["b"])
console.log("LET, CONST Y VAR")
// let, const y var
// var : crea variables a nivel global, es decir las variables se introducen dentro del objeto window
// var es independiente del scope o el bloque consumen más memoria
console.log(window)
var miVar = 3
console.log(window.miVar)
// LET:variable que se crea dentro de un bloque de código. no consume tanta memoria
// esta variables modificable
let miLet = 100
console.log(window.miLet)
console.log(miLet)
miLet = 200
console.log(miLet)
// CONST: Declaración de consante, se refiere a una variable que nunca va a cambiar
// Estas son la que más memoria ahorran
const miConst = 990
console.log(miConst)

console.log("NULL Y UNDEFINED")
// todas las variables que no existen regresan undefined
// el programador tiene la opción de convertir su variable en null para definir valor vacío
let miVariableInexistente = null
// regresa true, porque en teoría null==undefined
console.log(miVariableInexistente== undefined)
// regresa false, porque los dos tipos no son exactamente iguales
console.log(miVariableInexistente=== undefined)

// para evitar el loop entre null y undefined
miVariableInexistente =1800
// if
if(miVariableInexistente){
    console.log("esta variable existe y voy a hacer algo con ella !")
}else{
    console.log("Esta variable esta completamente vacía")
}
// Arreglos
console.log("ARREGLOS")

const arregloGenial = [0,1,2,3,4,5,6]
// for
for (let i = 0; i < arregloGenial.length; i++) {
    // el elemento puede ser constante porque esta excento a solo esta iteración
    // en el siguiente ciclo ya no existirá, buena manera de ahorrar memoria
    const element = arregloGenial[i];
    console.log(element*10)
}
// while
let suma= 0
let i=0
while(suma<21){
    suma += arregloGenial[i]
    i+=1
}
console.log("while terminado! la suma es : "+suma)

// funciones
function laMejorFuncion(){
    return "gran funcion!"
}
console.log(laMejorFuncion())

function funcionSuma(a,b){
    console.log("otra gran función! Resolveré una suma")
    return a+b
}
console.log(funcionSuma(2,3))

// El uso de los tres puntos
// operador de propagación, utilizado para intervenir en objetos que se pueden convertir en listas o son listas per se

function funcionSumaLista(...lista){
    let suma =0
    for (let i = 0; i < lista.length; i++) {
        suma =suma + lista[i];
       
    }
    return suma
}
console.log(funcionSumaLista(1,2,3,4,5,6,7))
const listaAndidada = ["esponja","pantalones"]
const listaGeneral = ["bob",...listaAndidada, "cuadrados"]
console.log(listaGeneral)


console.log(2=="2")
console.log(2==="2")
console.log('' == 0)