import React from "react"
import { Menu, Icon } from "antd"

import Layout from "../components/Layout/Layout"
import { Typography } from "antd"

const { Title } = Typography

//ErrorComponent page
function ErrorComponent() {
  return (
    <Layout>
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "block" }}>
          <Icon
            type="robot"
            style={{
              fontSize: "95px",
              color: "#858585",
              display: "block",
              margin: "0 auto",
              paddingBottom: "1rem",
            }}
          />
          <Title level={2} style={{ color: "#858585" }}>
            Error 404: Page Not Found
          </Title>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorComponent
