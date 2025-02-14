import React from 'react'

const NewTaskForm = () => {
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