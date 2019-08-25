import React from "react"
import { Menu, Icon, Typography } from "antd"
import Layout from "../components/Layout/Layout"
import { Empty } from "antd"
import AddToDo from '../components/ToDo/AddToDo'
import ToDoList from '../components/ToDo/ToDoList'
const { Title, Text } = Typography
//Todo page
function Todo() {
  return (
    <Layout>
      <Title level={3}>To Do List</Title>
      <AddToDo/>
      <ToDoList/>
    </Layout>
  )
}

export default Todo
