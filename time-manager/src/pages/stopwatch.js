import React from "react"
import { Menu, Icon } from "antd"
import Layout from "../components/Layout/Layout"
import Timer from "../components/Timer/Timer"
import Countdown from "../components/Countdown/Countdown"
//Stopwatch page
function Stopwatch() {
  return (
    <Layout>
      <Timer />
      <Countdown />
    </Layout>
  )
}

export default Stopwatch
