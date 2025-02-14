import React from 'react'
import styled from 'styled-components'
import TaskList from '../features/tasks/TaskList'
import NewTaskForm from '../features/tasks/NewTaskForm'

const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

const HomePage = () => {
  return (
    <>
      <MainHeader>What Do You Have To Do?</MainHeader>
      <NewTaskForm />
      <TaskList />
    </>
  )
}

export default HomePage