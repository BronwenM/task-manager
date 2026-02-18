import React from 'react'
import styled from 'styled-components'
import TaskList from '../features/tasks/TaskList'
import NewTaskForm from '../features/tasks/NewTaskForm'
import { TaskItem } from '../components/index'

const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

const HomePage = () => {
  return (
    <>
      <MainHeader>What Do You Have To Do?</MainHeader>
      <TaskItem title="Task to complete" description="Description of the task" due="2013-12-25 11:12" tags={['tag1', 'tag2']} />
      <NewTaskForm />
      <TaskList />
    </>
  )
}

export default HomePage