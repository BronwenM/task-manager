import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { selectTaskById, taskUpdated } from '../features/tasks/tasksSlice'
import styled from 'styled-components'

const EditTaskForm = styled.form`
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

const EditTaskPage = () => {
  const {taskId} = useParams()
  
  const task = useSelector(state => selectTaskById(state, Number(taskId)))
  const dispatch = useDispatch()
  const navigate = useNavigate();


  if(!task) {
    return (
      <section>
        <h2>Task not found. Try again</h2>
      </section>
    )
  }

  const onChangesSaved = (e) => {
    e.preventDefault()

    const taskData = e.currentTarget
    const title = taskData.taskTitle.value
    const description = taskData.taskDescription.value
    const due_date = taskData.dueDate.value

    if(title) {
      dispatch(taskUpdated({id: taskId, title, description, due_date}))
      navigate(`/`)
    }

  }


  return (
    <section>
      <EditTaskForm onSubmit={onChangesSaved}>
        <label htmlFor='taskTitle'>Task Title</label>
        <input type='text' id='taskTitle' defaultValue={task.title} placeholder='What new task do you have to do?' required />
        <label htmlFor='taskDescription'>Description</label>
        <textarea name='taskDescription' id='taskDescription' defaultValue={task.description} placeholder='Take some notes about what you need to do'/>
        <label htmlFor='dueDate'>Due Date</label>
        <input type='datetime-local' id='dueDate' defaultValue={task.due_date}/>
        <button>Save Changes</button>
      </EditTaskForm>
    </section>
  )
}

export default EditTaskPage