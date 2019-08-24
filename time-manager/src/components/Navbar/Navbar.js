import React, { useState } from "react"
import { Menu, Icon } from "antd"
import { Link } from "react-router-dom"
// navbar component
function Navbar() {
  const [current, setCurrent] = useState("")
  useState(() => {
    const link = window.location.pathname.slice(1)
    if (link.length == 0) {
      setCurrent("current")
    } else {
      setCurrent(link)
    }
  }, [])

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Menu.Item key="current">
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="stopwatch">
        <Link to="/stopwatch">
          <Icon type="clock-circle" />
          StopWatch
        </Link>
      </Menu.Item>

      <Menu.Item key="timer">
        <Link to="/timer">
          <Icon type="hourglass" />
          Timer
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
