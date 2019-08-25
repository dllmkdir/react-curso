import React, {useState, useContext} from "react"

import Navbar from "../Navbar/Navbar"
import { Input, Tooltip, Icon, Typography } from 'antd';
import {ToDoContext} from './ToDoContext'
import ToDoList from './ToDoList'
const { Text } = Typography;
const { Search } = Input;
// navbar component
function AddToDo() {
  const [alert, setAlert] = useState(false)
  const [text, setText] = useState("")
  const {state: todoState, dispatch} = useContext(ToDoContext)
  const handleChange=(e)=>{
    if(text.length>=50){
      e.preventDefault()
      e.stopPropagation()
      setAlert(true)
    }else{
      const value = e.target.value
      console.log(value)
      setText(value)
      setAlert(false)
    }
  }
  const handleKeyDown=(e)=>{
    if(e.key=="Enter"){
      handleSubmit()
    }
  }
  const handleSubmit=()=>{
    dispatch({type:"add", toDo:text})
    setAlert(false)
    setText("")//clear input
  }
  return (
    <React.Fragment>
    <Input
    value={text}
      placeholder="Enter your username"
      prefix={<Icon type="unordered-list" style={{ color: 'rgba(0,0,0)' }} />}
      suffix={
        <Tooltip title="Add To Do">
          <Icon type="plus" style={{ color: 'rgba(0,0,0)' }} />
        </Tooltip>
      }
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    {alert && <Text type="danger">No more than 50 characters</Text> }
    
    </React.Fragment>
  )
}

export default AddToDo

