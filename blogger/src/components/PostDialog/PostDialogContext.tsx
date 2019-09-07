//Crear contextos utilizando typescript
import React, { useReducer } from "react"
interface PostDialogController {
    active: boolean
    dispatch: any
}
//set typescript action for the controller
interface ActionController {
    type: 'set' | 'reset'
    active: boolean
}
const initState: PostDialogController = {
    active: false,
    dispatch: null,
}

//create reducer for state management
const reducer = (state, action: ActionController) => {
    switch (action.type) {
        case "set":
            console.log("set")
            return {
                ...state,
                active: action.active
            }
        case "reset":
            return { ...state, active: false }
        //default, do nothing
        default:
            return { ...state }
    }
}

//create context with initial conditions
const PostDialogContext = React.createContext<PostDialogController>(initState)
//Provider Init
const PostDialogProvider: React.FC = ({ children }) => {
    //use Reducer
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <PostDialogContext.Provider value={{ active: state.active, dispatch }}>
            {/* Provider Wrapper, everything inside will be in further context */}
            {children}
        </PostDialogContext.Provider>
    )
}
//Export conext and provider
export { PostDialogContext, PostDialogProvider }
