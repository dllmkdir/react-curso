import React, { useState, useEffect } from "react"
import { Menu, Icon, Select } from "antd"
import Layout from "../components/Layout/Layout"
import { Typography } from "antd"
import Clock from "react-live-clock"
const { Title, Text } = Typography
const { Option, OptGroup } = Select
//Current page
function Current() {
  const [timezone, setTimeZone] = useState("US/Pacific")
  const [background, setBackground] = useState("")
  const handleTimezone = value => {
    setTimeZone(value)
  }
  const generateHex = (x, y) => {
    const height = document.body.clientHeight
    const width = document.body.clientWidth
    const realX = Math.floor((255 / width) * x)
    console.log(x)
    console.log(width)
    const realY = Math.floor((255 / height) * y)
    const randomZ = realY
    const hexColor = "rgb(" + realX + ", " + realY + ", " + randomZ + ")"
    setBackground(hexColor)
  }
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const handleMouseMove = e => {
    generateHex(e.screenX, e.screenY)
  }
  useEffect(() => {
    //   Verify if background has the appropiate length
    if (background) {
      console.log(background)
      document.body.style.backgroundColor = background
    }
  }, [background])
  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "white"
    }
  }, [])
  return (
    <Layout>
      <div onMouseMove={handleMouseMove}>
        <Title level={3}>Hello! Welcome to this Clock System</Title>
        <Text style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Title level={1} style={{ fontSize: "9rem", textAlign: "center" }}>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={timezone} />
          <Select
            style={{ display: "block", margin: "0 auto" }}
            defaultValue={timezone || "US/Pacific"}
            style={{ width: 200 }}
            onChange={handleTimezone}
          >
            <OptGroup label="Timezones">
              <Option value="US/Pacific">US/Pacific</Option>
              <Option value="America/New_York">America/New_York</Option>
              <Option value="Asia/Singapore">Asia/Singapore</Option>
              <Option value="Europe/Madrid">Europe/Madrid</Option>
              <Option value="Mexico/BajaSur">Mexico/BajaSur</Option>
              <Option value="Africa/Bissau">Africa/Bissau</Option>
              <Option value="Mexico/General">Mexico/General</Option>
            </OptGroup>
          </Select>
        </Title>
      </div>
    </Layout>
  )
}

export default Current
