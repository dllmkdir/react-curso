import React, { useState, useContext, useEffect, useRef } from "react"
import {
  Menu,
  Icon,
  InputNumber,
  Button,
  Typography,
  Spin,
  notification,
} from "antd"

import { Link } from "react-router-dom"
import { CountdownContext } from "../Countdown/CountdownContext"
const { Text, Title } = Typography
function Countdown() {
  //own seconds and own minutes
  const [loading, setLoading] = useState(false)
  const [countdown, setCountdown] = useState(false)
  const [delay, setDelay] = useState(null)
  const [time, setTime] = useState("")
  const { timerState, dispatch } = useContext(CountdownContext)
  useInterval(() => {
    dispatch({ type: "decrease" })
  }, delay)
  const handleNotification = () => {
    notification.open({
      message: "Stopwatch Notification",
      description: "Stopwatch Has finished!",
    })
  }
  //handle Countdown
  const handleCountdown = () => {
    //first, set the local countdown to paint the minutes and seconds in screen
    setCountdown(true)
    //set delay to a number
    setDelay(1000)
  }
  //trigger effect when context show that the timer state is active
  useEffect(() => {
    //if the timer state is set to active, then start the countdown
    if (timerState.active) {
      //first create  a loading state:
      setLoading(true)
      setCountdown(false)
      setTimeout(async function() {
        setLoading(false)
        handleCountdown()
      }, 3000)
    }
  }, [timerState.active])
  //up`date time in correct format
  useEffect(() => {
    let { minutes, seconds } = timerState
    let timeStr = minutes < 10 ? "0" + minutes : minutes
    timeStr += ":"
    timeStr += seconds < 10 ? "0" + seconds : seconds
    setTime(timeStr)
  }, [timerState.minutes, timerState.seconds])
  //   if countdown has finished, then deactivate the chronometer
  useEffect(() => {
    //   destructuring for minutes and seconds
    let { minutes, seconds } = timerState
    if (countdown && minutes <= 0 && seconds <= 0) {
      dispatch({ type: "deactivate" })
      setDelay(null) // set delay to null in order to clear interval
      handleNotification()
    }
  }, [timerState.minutes, timerState.seconds, countdown])
  return (
    <div style={{ display: "block", margin: "0 auto", padding: "1em" }}>
      {loading && (
        <React.Fragment>
          <Spin />
          <Text> Loading...</Text>
        </React.Fragment>
      )}
      {/* Set countdown numbers */}
      {countdown && (
        <Title level={1} style={{ fontSize: "9rem", textAlign: "center" }}>
          {time}
        </Title>
      )}
    </div>
  )
}
//function useInterval from dan Abramov website
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      //@ts-ignore
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
export default Countdown
