import React, { useReducer } from "react"
interface MarkdownEditorController {
    description: string
    dispatch: any
}
const initState: MarkdownEditorController = {
    description: '',
    dispatch: null,
}
//create reducer for state management
const reducer = (state, action) => {
    switch (action.type) {
        case "set":
            return {
                ...state,
                description: action.description
            }
        case "reset":
            //console.log("reset!")
            return { ...state, description: '' }
        //default, do nothing
        default:
            return { ...state }
    }
}

//create context with initial conditions
const MarkdownEditorContext = React.createContext<MarkdownEditorController>(initState)
//Provider Init
const MarkdownEditorProvider: React.FC = ({ children }) => {
    //use Reducer
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <MarkdownEditorContext.Provider value={{ description: state.description, dispatch }}>
            {/* Provider Wrapper, everything inside will be in further context */}
            {children}
        </MarkdownEditorContext.Provider>
    )
}
//Export conext and provider
export { MarkdownEditorContext, MarkdownEditorProvider }
