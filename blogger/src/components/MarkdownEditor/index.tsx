import React, { useContext } from "react"
//importamos navbar
import { useStyles } from "./styles"
import TextField from '@material-ui/core/TextField';
import { MarkdownEditorContext } from './MarkdownEditorContext'
import ReactMarkdown from 'react-markdown'
//set the markdown editor in action
interface MarkdownEditorFormProps { }
const MarkdownEditorForm: React.FC<MarkdownEditorFormProps> = () => {
    const { description, dispatch } = useContext(MarkdownEditorContext)
    //Write in the dispatch method
    const handleChange = (e) => {
        e.preventDefault()
        dispatch({ type: 'set', description: e.target.value })
    }
    // @ts-ignore
    const classes = useStyles()
    return (
        <div className={classes.box}>
            <div className={classes.comparisonBox}>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows="8"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={description || ''}
                    onChange={handleChange}
                />
            </div>
            <div className={classes.comparisonBox} style={{ padding: '1rem' }}>
                <ReactMarkdown source={description || ''} className={classes.description} />
            </div>
        </div>
    )
}

export default MarkdownEditorForm