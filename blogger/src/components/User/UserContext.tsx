import React, { useReducer } from "react"
interface UserController {
    name: string
    dispatch: any
}
const initState: UserController = {
    name: '',
    dispatch: null,
}
//create reducer for state management
const reducer = (state, action) => {
    switch (action.type) {
        case "set":
            return {
                ...state,
                name: action.name
            }
        case "reset":
            //console.log("reset!")
            return { ...state, name: '' }
        //default, do nothing
        default:
            return { ...state }
    }
}

//create context with initial conditions
const UserContext = React.createContext<UserController>(initState)
//Provider Init
const UserProvider: React.FC = ({ children }) => {
    //use Reducer
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <UserContext.Provider value={{ name: state.name, dispatch }}>
            {/* Provider Wrapper, everything inside will be in further context */}
            {children}
        </UserContext.Provider>
    )
}
//Export conext and provider
export { UserContext, UserProvider }
