import './TaskItem.scss'
import { useState } from 'react'

const TaskItem = ({ title, description, dueDate, tags, completed }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

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

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`} onClick={toggleDetails}>
      <input type='checkbox' className='task-item__btn' checked={isCompleted} onClick={handleTaskCompleted} onChange={() => {}} />
      <div className='task-item__header'>
        <h2 className='task-item__text'>{title}</h2>
        <div className='task-item__info'>
          <span className='task-item__due-date'>Due {new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(dueDate))}</span>
          <span className='task-item__tag-grp'>
            {tags?.slice(0,4).map(tag => (
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