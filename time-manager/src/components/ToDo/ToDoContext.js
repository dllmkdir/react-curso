//Cover List Context Declaration
import React, { useReducer } from "react"
const initState = {
  toDoList: [],
  dispatch: null,
}

//create reducer for state management
const reducer = (state, action) => {
  let toDoTemp
  let toDoListTemp
  switch (action.type) {
    case "add":
      //   console.log(state.photoDict)
      //   photoTemp = action.row.toString()
      //   let photoDictTemp = state.photoDict[photoTemp]
      //   photoDictTemp.push(action.photo)
      //   return {
      //     ...state,
      //     photoDict: { ...state.photoDict, [photoTemp]: [] },
      //   }
      return {
        ...state,
        toDoList: [...state.toDoList, action.toDo],
      }
    case "edit":
      toDoListTemp = state.toDoList
      toDoListTemp[action.id] = action.value
      return { ...state, toDoList: toDoListTemp }

    case "reset":
      //console.log("reset!")
      return { ...state, toDoList: [] }
    // remove using the id and the row
    case "remove":
      console.log("remove")
      // dummy object to remove the specified id
      // eslint-disable-next-line
      toDoListTemp = Object.assign([], state.toDoList)
      for (let i = toDoListTemp.length - 1; i >= 0; i--) {
        if (i == action.id) {
          toDoListTemp.splice(i, 1)
        }
      }
      //reset all to prevent duplicate images

      return {
        ...state,
        toDoList: [...toDoListTemp],
      }

    //default, do nothing
    default:
      return { ...state }
  }
}

//create context with initial conditions
const ToDoContext = React.createContext(initState)
//Provider Init
function ToDoProvider({ children }) {
  //use Reducer
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <ToDoContext.Provider value={{ toDoList: state.toDoList, dispatch }}>
      {/* Provider Wrapper, everything inside will be in further context */}
      {children}
    </ToDoContext.Provider>
  )
}
//Export conext and provider
export { ToDoContext, ToDoProvider }
