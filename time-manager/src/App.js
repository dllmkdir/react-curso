import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Routes from "./Routes"
import Navbar from "./components/Navbar/Navbar"
import Current from "./pages/current"
import Stopwatch from "./pages/stopwatch"
import Timer from "./pages/timer"
import ErrorComponent from "./pages/errorPage"
import "antd/dist/antd.css"
import Layout from "./components/Layout/Layout"
function App() {
  return <Routes />
}

export default App
