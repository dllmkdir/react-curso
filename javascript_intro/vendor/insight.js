// Javascript estático para la página de  JS Insight
console.log("insight")
//Promises
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
console.log("PROMESAS")
// esta funcion cambia el texto después de que regrese "finalizado"
// IMPORTANTE: SET TIMEOUT NO RETORNA EN PRIMERA INSTANCIA UNA PROMESA, POR LO QUE
// CUANDO SE INSTANCIA REGRESA UN VALOR Y DESPUÉS CREA UNA PROMESA
function seTarda(){
    setTimeout(
        ()=>{
           document.getElementById('titulo').innerHTML="Cambiado después de mucho tiempo!" 
           
        },2000
    )
    return "seTarda Cambio de Título Finalizado"
}
console.log(seTarda())
// En esta nueva función el texto se muestra después de un tiempo
// es el comportamiento esperado de las promesas
function promesaSeTarda(){
    let promesa = new Promise((resolve, reject)=>{
        setTimeout(
            ()=>{
               document.getElementById('autor').innerHTML="Cambiado después de mucho tiempo!" 
               resolve()
            },2000
        )
        
    })
    // Buena práctica utilizar catch siempre para evitar errores
    // se pueden anidar una cantidad infinita de then()
    promesa.then(()=>{
        console.log("Cambio de Autor Finalizado")
    }).catch(()=>{

    })
    // Observar que el valor regresa antes de mostrar "CAMBIO de autor Finalizado"
    return "promesaSeTarda Finalizado "
}

console.log(promesaSeTarda())
console.log("Múltiples promesas")
//Resolver múltiples promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all
var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, "one"); 
  }); 
  var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, "two"); 
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  var p5 = new Promise((resolve, reject) => {
    reject("reject");
  });

  Promise.all([p1, p2, p3, p4,p5]).then(values => { 
    console.log(values);
  }, reason => {
    console.log(reason)
  });
  
  //From console:
  //"reject"

  
//ASYNC AWAIT
const test = async () => {
    //Espera la ejecución de esto
    // UNA PROMESA(TIMEOUT) DENTRO DE UNA PROMESA (NEW PROMISE)
    
    await new Promise((resolve)=>setTimeout(() => {
        document.getElementById('description').innerHTML="Cambiado después de mucho tiempo!" 
        console.log("timeout");
        resolve();
    }, 4000)); 
    //Sí se ejecuta después de 4 segundos
    await console.log("Esto se debió imprimir después de 4 segundos")
    //CAVEAT: return regresará el valor antes que el console log
    return "test finalizado"
}
//se tiene que usar el punto y coma para que no exista ningún error
//esto regresará una promesa pendiente
console.log(test());

(async function(){
    let response = await test()
    console.log(response)
})()







