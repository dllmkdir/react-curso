//Countdown Context Declaration
import React, { useReducer } from "react"
const initState = {
  timerState: {
    minutes: 0,
    seconds: 0,
    active: false,
  },
  dispatch: null,
}

//create reducer for state management
const reducer = (state, action) => {
  switch (action.type) {
    case "set_clock":
      return {
        ...state,
        timerState: {
          minutes: action.minutes,
          seconds: action.seconds,
          active: action.active,
        },
      }
    case "decrease": {
      let { minutes, seconds } = state.timerState
      let newSeconds, newMinutes
      //decrease minutes
      if (minutes >= 1 && seconds == 0) {
        newSeconds = 59
        newMinutes = minutes - 1
      } else if (seconds == 0) {
        newSeconds = 0
        newMinutes = minutes
      } else {
        newSeconds = seconds - 1
        newMinutes = minutes
      }
      return {
        ...state,
        timerState: {
          minutes: newMinutes,
          seconds: newSeconds,
          active: state.timerState.active,
        },
      }
    }
    case "deactivate":
      return {
        ...state,
        timerState: {
          ...state.timerState,
          active: false,
        },
      }
    case "reset":
      //console.log("reset!")
      return {
        ...state,
        timerState: {
          minutes: 0,
          seconds: 0,
          active: false,
        },
      }
    //default, do nothing
    default:
      return { ...state }
  }
}

//create context with initial conditions
const CountdownContext = React.createContext(initState)
//Provider Init
function CountdownProvider({ children }) {
  //use Reducer
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <CountdownContext.Provider
      value={{ timerState: state.timerState, dispatch }}
    >
      {/* Provider Wrapper, everything inside will be in further context */}
      {children}
    </CountdownContext.Provider>
  )
}
//Export conext and provider
export { CountdownContext, CountdownProvider }
