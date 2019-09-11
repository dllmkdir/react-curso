# react-curso
Curso de React; abarcando los temas más esenciales.

Descarga NPM y Node JS: https://www.npmjs.com/get-npm (v10.16.3 LTS)

Para usuarios de Mac, es mejor iniciar Visual Studio Code con:
`sudo code`

##### Javascript: Introducción
  * Pequeña Historia de Javascript para no aburrir
  * Variables (diferencias entre let, const, var ) y window
  * Undefined y Null
  * Ifs, fors, whiles y funciones
  * This context
  * Arrow Functions
  * .map() .filter()
  * Acceder Elementos del DOM
  * Listeners
##### Javascript Insight:
  * Promises
  * Async, await 
  * Ejecución de un solo hilo
##### Nuestro More Mole: React Overview
  * Ciclo de Vida en React
##### React En la Edad de Piedra
  * The Real OG: Clases
  * Constructor (props)
  * Estados
  * this.state
  * Deestructuring
  * ComponentDidMount, ComponentWillMount , etc
  * Interacción con otros Componentes (El gran fastidio)
##### React >= 16.8 : The Hooks Boy-Ho
  * useState()
  * Funciones para React
  * SSR y CSR : la dicotomía del diablo
  * useEffect()
    * useEffect(()=>{},[])
    * useEffect(()=>{},[x])
    * useEffect(()=>{},[x, y])
    * useEffect(()=>{return x},[])
    * useLayoutEffect()
  * Comunicación entre componentes (interface, props)
  * useContext()
    * useReducer() : Adiós Redux (No completamente)
    * [dispatch, state]
    * Provider, Context
    * To Do List : ejemplo práctico
  * useRef()
    * Mancuerna con useEffect()
    * setTimer y el problema con setInterval()
    * useInterval (Tutorial de Dan Abramov)
  * useCallback()
  * useMemo()
  * React.Suspense : La pantomima

##### Typescript y lo que a javascript se le olvidó
  * Types
  * Interfaces
  * Require
  * Constructor
##### Frameworks, y el estado actual de Javascript
##### Ejemplo práctico	con Gatsby y Django REST API
##### Ejemplo práctico	con NextJS y Firebase Real Time Database


# Comandos útiles
## Javascript intro(ExpressJS)

`npm init`

Instala expressJS y Nodemon:

`sudo npm install express nodemon --save`

Corre Nodemon de manera local:

`npx nodemon index.js`

## Time Manager (ReactJS)
Instala Yarn para Mac OS:

`brew install yarn`

Instalador para Windows:

`https://yarnpkg.com/es-ES/docs/install#windows-stable`

## Blogger: Starter para Gatsby y Typescript:

`sudo gatsby new blogger https://github.com/charlie632/gatsby-basic-ts-starter`

`yarn`

`yarn add axios @material-ui/icons @material-ui/styles @material-ui/core`

`yarn start`

## Instagreat (NextJS and Typescript)

`mkdir instagreat`

`cd instagreat`

`yarn`

`yarn add react react-dom next typescript @types/react @types/react-dom @types/node`

Add this to to package.json:

`"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  `
  
Create pages/index.tsx and add a new component

`yarn run dev`



