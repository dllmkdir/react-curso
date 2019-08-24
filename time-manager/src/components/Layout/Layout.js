import React from "react"
import { Menu, Icon } from "antd"
import Navbar from "../Navbar/Navbar"
// navbar component
function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          padding: "2rem",
        }}
      >
        {children}
      </div>
    </React.Fragment>
  )
}

export default Layout
