//Crear contextos utilizando typescript
import React, { useReducer } from "react"
//submit variable helps to  reload all the posts with the updated information
interface PostDialogController {
    active: boolean
    submit: boolean
    dispatch: any
}
//set typescript action for the controller
interface ActionController {
    type: 'set' | 'reset' | 'submit'
    active: boolean
    submit: boolean
}
const initState: PostDialogController = {
    active: false,
    submit: false,
    dispatch: null,
}

//create reducer for state management
const reducer = (state, action: ActionController) => {
    switch (action.type) {
        case "set":
            return {
                ...state,
                active: action.active
            }
        // set submit to true
        case "submit":
            return {
                ...state,
                submit: action.submit
            }
        case "reset":
            return { ...state, active: false, submit: false }
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
        <PostDialogContext.Provider value={{ active: state.active, submit: state.submit, dispatch }}>
            {/* Provider Wrapper, everything inside will be in further context */}
            {children}
        </PostDialogContext.Provider>
    )
}
//Export conext and provider
export { PostDialogContext, PostDialogProvider }
