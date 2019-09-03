import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Routes from "./Routes"
import "antd/dist/antd.css"
import Layout from "./components/Layout/Layout"
import { ToDoProvider } from "./components/ToDo/ToDoContext"
import { CountdownProvider } from "./components/Countdown/CountdownContext"
function App() {
  return (
    <CountdownProvider>
      <ToDoProvider>
        <Routes />
      </ToDoProvider>
    </CountdownProvider>
  )
}

export default App
