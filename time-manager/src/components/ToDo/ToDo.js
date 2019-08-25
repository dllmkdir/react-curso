import React, { useContext, useEffect, useState } from "react"
import "antd/dist/antd.css"
import {ToDoContext} from './ToDoContext'

import { Empty, List, Avatar, Button, Skeleton ,Typography, Divider , Input, Tooltip} from 'antd';

const { Text } = Typography;
function ToDo({text,key}) {
    const [textEdit, setTextEdit]= useState("")
    const [edit, setEdit] = useState(false)
    const {toDoList, dispatch} = useContext(ToDoContext)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[toDoList])
    const handleEdit=(e)=>{
        e.preventDefault()
        setEdit(true)
    }
    const handleDelete=(e)=>{
        e.preventDefault()
    }
    const handleChangeEdit=(e)=>{
        e.preventDefault()
        setTextEdit()
    }
  return(
      <React.Fragment>
        <div style={{display:'flex',justifyContent:'space-between' ,padding:'1em',}} key={key}>
            <div>
                <Text>{key}-{text}</Text>
            </div>
            <div>
                <Button onClick={handleEdit} style={{margin:'0.3em'}}  shape="circle" icon="edit" />
                <Button onClick={handleDelete} style={{margin:'0.3em'}} shape="circle" icon="delete" />
            </div>
            
        </div>
        {edit && <React.Fragment>
            <Input
    value={text}
      placeholder="Enter your username"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
        </React.Fragment>}
        <Divider style={{margin:'0.2em'}}/>
    </React.Fragment>
  ) 
  
}

export default ToDo
