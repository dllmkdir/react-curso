import React, { useContext, useEffect, useState } from "react"
import "antd/dist/antd.css"
import { ToDoContext } from "./ToDoContext"

import {
  Empty,
  List,
  Avatar,
  Button,
  Skeleton,
  Typography,
  Divider,
  Input,
  Tooltip,
} from "antd"

const { Text } = Typography
function ToDo({ text, i }) {
  const [textEdit, setTextEdit] = useState("")
  const [edit, setEdit] = useState(false)
  const { toDoList, dispatch } = useContext(ToDoContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [toDoList])
  const handleEdit = e => {
    e.preventDefault()
    if (!edit) {
      setTextEdit(text)
      setEdit(true)
    } else {
      setTextEdit("")
      setEdit(false)
    }
  }
  const handleDelete = e => {
    e.preventDefault()
    dispatch({ type: "remove", id: i })
  }
  const handleChangeEdit = e => {
    e.preventDefault()
    setTextEdit(e.target.value)
  }
  const handleSubmitEdit = e => {
    e.preventDefault()
    dispatch({ type: "edit", id: i, value: textEdit })
    setTextEdit("")
    setEdit(false)
  }
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
        }}
        key={i}
      >
        <div>
          <Text>
            {i} | {text}
          </Text>
        </div>
        <div>
          <Button
            onClick={handleEdit}
            style={{ margin: "0.3em" }}
            shape="circle"
            icon="edit"
          />
          <Button
            onClick={handleDelete}
            style={{ margin: "0.3em" }}
            shape="circle"
            icon="delete"
          />
        </div>
      </div>
      {edit && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1em",
          }}
        >
          <Input
            value={textEdit}
            placeholder="Enter your username"
            onChange={handleChangeEdit}
          />
          <Button onClick={handleSubmitEdit} type="primary">
            Submit
          </Button>
        </div>
      )}
      <Divider style={{ margin: "0.2em" }} />
    </React.Fragment>
  )
}

export default ToDo
