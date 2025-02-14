import React from 'react'
import { useDispatch } from 'react-redux'
import { taskCreated } from './tasksSlice';
import styled from 'styled-components';

const CreateTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  input, textarea {
    margin-bottom: 1rem;
    min-height: 2rem;
    padding: 0.75rem;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color:rgb(212, 223, 232);
  }

  button {
    background-color:rgb(242, 195, 53);
    width: 50%;
    padding: 1rem 0.5rem;
    // margin: 0 auto;
  }
  `

const NewTaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const taskData = e.currentTarget
    const title = taskData.taskTitle.value
    const description = taskData.taskDescription.value
    const due_date = taskData.dueDate.value

    if(title) {
      dispatch(taskCreated(title, description, due_date))
    }
  }

  return (
    <section>
      <CreateTaskForm onSubmit={handleSubmit}>
        <label htmlFor='taskTitle'>Task Title</label>
        <input type='text' id='taskTitle' placeholder='What new task do you have to do?' required />
        <label htmlFor='taskDescription'>Description</label>
        <textarea name='taskDescription' id='taskDescription' placeholder='Take some notes about what you need to do'/>
        <label htmlFor='dueDate'>Due Date</label>
        <input type='datetime-local' id='dueDate' />
        <button>Create Task</button>
      </CreateTaskForm>
    </section>
  )
}

export default NewTaskForm