// javascript estático para la página de test 102
console.log("test102")

// This: se refiere al objeto en javascript en el que se encontra contenido en ejecución
// This simepre se refiere un objeto
// cuando se llama a this se pregunta el objecto donde se encuentra javascript, es decir
// devuelve un contexto definido
console.log(this)//regresará window
console.log(this===window) //true

// se ejecuta el código en modo estricto, es decir
// las variables que no han sido declaradas lanzan errores y no se presentan como undefined
function usoEstricto(){
    'use strict'
    console.log(this===window) //false
}

usoEstricto()

// this cambiando de contexto al de una clase en forma de función
function Animal(fur, wings){
    this.fur = fur
    this.wings = wings
    this.description = function(){
        if(this.wings){
            console.log("este animal tiene alas!")
        }else{
            console.log("este animal no tiene alas, pobrecito")
        }
    }
}
console.log("creando un animal")
const animal1 = new Animal(false, true)
animal1.description()


// Buen ejemplo extraído de Medium
// https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8
console.log("contexto THIS avanzado")
function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window); 
}

let user = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user.foo()  // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1;
fun1() // Prints true as this method is invoked as a simple function.
user.foo1()  // Prints false on console as foo1 is invoked as a object’s method

// Arrow functions
console.log("ARROW FUNCTIONS")
// El contexto this siempre pasa dependiendo en donde sencuentre la ejecución
// las arrow functions son funciones que no tienen su propio contexto this
//  es decir, las arrow functions heredan  el contexto del padre que las llama
// las arrow functions NO tienen contexto propio
this.prueba = 100
console.log(this.prueba)
miFuncionFlecha =()=>{
    if(this===window){
        console.log("prueba existe en este contexto")
    }else{
        console.log("prueba NO existe en este contexto")
    }
}
function MiFuncionNormal(){
    this.call = function(){
        if(this===window){
            console.log("prueba existe en este contexto")
        }else{
            console.log("prueba NO existe en este contexto")
        }
    }
    if(this===window){
        console.log("prueba existe en este contexto")
    }else{
        console.log("prueba NO existe en este contexto")
    }
}
miFuncionFlecha()
// Si se crea un nuevo objeto el contexto cambia
// de otra manera, el contexto sigue siendo el mismo
MiFuncionNormal()//window===this
miFunc1 = new MiFuncionNormal()//window!=this
miFunc1.call()

console.log("MAP Y FILTER")
// map()
// map funciona para iterar sobre un arreglo
const arregloAsombroso = [
    {nombre:"John", apellido:"Wick"},
    {nombre:"Malvado", apellido:"Ted"},
    {nombre:"Neo", apellido:"???"},
    {nombre:"Kevin", apellido:"Lomax"},
    {nombre:"Kevin", apellido:"Spacey"}]

    // Enfoque tradicional
for (let i = 0; i < arregloAsombroso.length; i++) {
    const element = arregloAsombroso[i];
    console.log(element) 
}
//usando map
// primero se utiliza el parámetro del elemento ydespués la llave
// la llave representa un valor único
arregloAsombroso.map((personaje,key)=>{
    console.log(`${personaje.nombre} ${personaje.apellido}`)
    console.log(typeof key)
})

//filter
// Se refiere a la función que filtra información dependiendo de una aseveración
const arregloFiltrado = arregloAsombroso.filter((personaje)=>{return personaje.apellido!="Spacey"})
console.log(arregloFiltrado)

// Accediendo a elementos del DOM
console.log("ACCEDIENDO A ELEMENTOS DEL DOM")

console.log(document)
// por identificador
const titulo = document.getElementById("titulo")
let autor = document.getElementById("autor")
console.log(titulo)
console.log(autor)
autor.innerHTML = "Yo MERO CANTINERO"
autor.style= "color:blue;"

let botones = document.querySelectorAll(".uk-button")
console.log(botones)
// esto va a fallar
// botones.map((boton)=>{})
// Esto no va a funcionar, porque se crea una copia de los botones
// Funciona para leer valores
Array.from(botones).map((boton,key)=>{
    boton.innerHTML = "YEAH " + key
})


