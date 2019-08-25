import React, { useContext, useEffect, useState } from "react"
import "antd/dist/antd.css"
import { ToDoContext } from "./ToDoContext"
import ToDo from "./ToDo"
import { Empty, List, Avatar, Button, Skeleton, Divider } from "antd"
function TodoList() {
  const { toDoList, dispatch } = useContext(ToDoContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [toDoList])
  return (
    <div>
      {toDoList && toDoList.length > 0 ? (
        toDoList.map((todo, key) => <ToDo text={todo} i={key} key={key} />)
      ) : (
        <Empty style={{ padding: "3em" }} />
      )}
    </div>
  )
}

export default TodoList
