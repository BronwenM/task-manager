import styled from 'styled-components'
import { TaskItem, TaskList, NewTaskForm } from '../components/index'
import { allTasks } from '../assets/Static Data/tasks'

const HomePage = () => {


  return (
    <>
      <h1>What Do You Have To Do?</h1>
      <NewTaskForm />
      <TaskList tasks={allTasks} />
    </>
  )
}

export default HomePage