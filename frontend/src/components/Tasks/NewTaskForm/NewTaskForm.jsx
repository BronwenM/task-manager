import './NewTaskForm.scss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postTasks } from '../../../features/tasks/tasksSlice';

const NewTaskForm = () => {

  const dispatch = useDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const taskData = e.currentTarget
    const title = taskData.taskTitle.value
    const description = taskData.taskDescription.value
    const due_date = taskData.dueDate.value

    const form = e.currentTarget;

    if (title) {
      console.log("Submitting new task with data: ", { title, description, due_date })
      try {
        setAddRequestStatus('pending')
        await dispatch(postTasks({ title, description, due_date }))

        form.reset();
      } catch (err) {
        console.error("Something went wrong and the new task wasn't saved: ", err)
      } finally {
        setAddRequestStatus('idle')
      }
    }

  }

  return (
    <div className='new-task-form__container'>
      <h2>Create a new task</h2>
      <form className='new-task-form' onSubmit={handleSubmit}>
        <input type='text' id='taskTitle' name='taskTitle' placeholder='What do you need to do?' className='new-task-form__task-title' />
        <input type='datetime-local' id='dueDate' name='dueDate' />
        <textarea id='taskDescription' name='taskDescription' placeholder='Task Description'></textarea>
        <button type='submit'>Create Task</button>
      </form>
    </div>
  )
}

export default NewTaskForm