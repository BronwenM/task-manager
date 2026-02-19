import styled from 'styled-components'
import { TaskItem, TaskList, NewTaskForm } from '../components/index'

const HomePage = () => {

  const tasksArray = [
    {
      id: 1,
      title: 'Task to complete',
      description: 'Description of the task',
      due: '2013-12-25 11:12',
      tags: ['tag1', 'tag2'],
      completed: false
    },
    {
      id: 2,
      title: 'Task to complete',
      description: 'Description of the task',
      due: '2013-12-25 11:12',
      tags: ['tag1', 'tag2'],
      completed: true
    }
  ]

  return (
    <>
      <h1>What Do You Have To Do?</h1>
      <NewTaskForm />
      <TaskList tasks={tasksArray} />
    </>
  )
}

export default HomePage