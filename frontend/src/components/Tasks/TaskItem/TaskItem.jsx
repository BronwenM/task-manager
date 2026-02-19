import './TaskItem.scss'
import { useState } from 'react'

const TaskItem = ({ title, description, due, tags, completed }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleDetails = () => {
    setDetailsVisible(prev => !prev);
  }

  const handleTaskCompleted = (e) => {
    e.stopPropagation();
    setIsCompleted(prev => !prev);
  }

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`} onClick={toggleDetails}>
      <input type='checkbox' className='task-item__btn' checked={isCompleted} onClick={handleTaskCompleted} />
      <div className='task-item__header'>
        <h2 className='task-item__text'>{title}</h2>
        <div className='task-item__info'>
          <span className='task-item__due-date'>{due}</span>
          <span className='task-item__tag-grp'>
            {tags?.map(tag => (
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
          <button className='task-item__delete-btn'>Delete</button>
          <button className='task-item__edit-btn'>Edit</button>
        </div>
      </span>
    </div>
  )
}

export default TaskItem