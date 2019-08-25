import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Routes from "./Routes"
import "antd/dist/antd.css"
import Layout from "./components/Layout/Layout"
import {ToDoProvider} from './components/ToDo/ToDoContext'
function App() {
  return(
    <ToDoProvider>
      <Routes />
    </ToDoProvider>
  ) 
  
}

export default App
