import './NewTaskForm.scss'

const NewTaskForm = () => {
  return (
    <div className='new-task-form__container'>
      <h2>Create a new task</h2>
      <form className='new-task-form'>
        <input type='text' name='taskTitle' placeholder='What do you need to do?' className='new-task-form__task-title'/>
        <input type='datetime-local' name='dueDate' />
        <textarea name='taskDescription' placeholder='Task Description'></textarea>
        <button type='submit'>Create Task</button>
      </form>
    </div>
  )
}

export default NewTaskForm