import React from 'react'
import { useDispatch } from 'react-redux'
import { taskCreated } from './tasksSlice';

const NewTaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const taskData = e.currentTarget
    const title = taskData.taskTitle.value

    if(title) {
      dispatch(taskCreated({title, description: '', due_date: '', is_completed: ''}))
    }
  }

  return (
    <section>
      <form>
        <label htmlFor='taskTitle'>New Task:</label>
        <input type='text' id='taskTitle' placeholder='What new task do you have to do?' required />
        <button>Create Task</button>
      </form>
    </section>
  )
}

export default NewTaskForm