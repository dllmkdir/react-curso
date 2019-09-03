import React, { useState, useContext, useEffect } from "react"
import { Menu, Icon, InputNumber, Button, Typography } from "antd"
import { Link } from "react-router-dom"
import { CountdownContext } from "../Countdown/CountdownContext"
const { Text } = Typography
// navbar component
function Timer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const handleMinutes = e => {
    if (e && e <= 59) {
      setMinutes(e)
    }
  }
  const handleSeconds = e => {
    //we use e && to prevent the input from using the null operator and setting it on the hook
    if (e && e <= 59) {
      setSeconds(e)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    // create active chronometer
    if (!timerState.active) {
      dispatch({
        type: "set_clock",
        minutes: minutes,
        seconds: seconds,
        active: true,
      })
    }
  }
  useEffect(() => {
    //Use effect for state cleanup
    return () => {
      dispatch({ type: "reset" })
    }
  }, [])
  const { timerState, dispatch } = useContext(CountdownContext)
  return (
    <div style={{ display: "block", margin: "0 auto", padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InputNumber
          style={{ margin: "1em", border: "none" }}
          size="large"
          min={0}
          max={100}
          value={minutes}
          onChange={handleMinutes}
        />
        <Text
          style={{ fontSize: "30px", marginTop: "8px", marginRight: "42px" }}
        >
          {":"}
        </Text>
        <InputNumber
          style={{ margin: "1em", border: "none" }}
          size="large"
          min={0}
          max={59}
          value={seconds}
          onChange={handleSeconds}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {`${minutes}:${seconds}`}
      </div>
      <Button
        style={{ display: "block", margin: "0 auto" }}
        onClick={handleSubmit}
        type="primary"
        shape="round"
      >
        Set Timer
      </Button>
    </div>
  )
}

export default Timer
