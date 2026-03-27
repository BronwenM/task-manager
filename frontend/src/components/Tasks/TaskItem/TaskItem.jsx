import './TaskItem.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTasks, fetchTasks, taskDeleted } from '../../../features/tasks/tasksSlice'
import { deleteTask } from '../../../assets/Static Data/tasks'

const TaskItem = ({ task }) => {
  const { title, description, dueDate, tags, completed, id } = task;

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const stopPropBtn = (e) => {
    e.stopPropagation();
  }

  const toggleDetails = () => {
    setDetailsVisible(prev => !prev);
  }

  const handleTaskCompleted = (e) => {
    e.stopPropagation();
    setIsCompleted(prev => !prev);
  }

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const onDelete = async () => {
    stopPropBtn()

    try {
      await dispatch(deleteTasks(id))

    } catch (err) {
      console.error("Something went wrong deleting the task:", err)
    } finally {
      setRequestStatus('idle')
      dispatch(taskDeleted({ id }))
    }
  }

  const staticDeleteTask = (e) => {
    stopPropBtn(e)
    deleteTask(id);
  }

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`} onClick={toggleDetails}>
      <input type='checkbox' className='task-item__btn' checked={isCompleted} onClick={handleTaskCompleted} onChange={() => { }} />
      <div className='task-item__header'>
        <h2 className='task-item__text'>{title}</h2>
        <div className='task-item__info'>
          <span className='task-item__due-date'>Due {new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(dueDate))}</span>
          <span className='task-item__tag-grp'>
            {tags?.slice(0, 4).map(tag => (
              <a key={tag} className='task-item__tag'>
                {`#${tag}`}
              </a>
            ))}
          </span>
        </div>
      </div>

      <span className={`task-item__details ${detailsVisible ? '' : 'hidden'}`}>
        <div className='task-item__details__text'>
          <p>{description}</p>
        </div>

        <div className='task-item__actions'>
          <button onClick={staticDeleteTask} to={`/tasks/delete/${id}`} className='task-item__delete-btn'>Delete</button>
          <Link onClick={stopPropBtn} to={`/tasks/edit/${id}`} className='task-item__edit-btn'>Edit</Link>
        </div>
      </span>
    </div>
  )
}

export default TaskItem