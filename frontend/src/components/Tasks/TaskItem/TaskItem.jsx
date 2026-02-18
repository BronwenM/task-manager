import './TaskItem.scss'

const TaskItem = ({ title, description, due, tags }) => {
  return (
    <div className='task-item'>
      <button className='task-item__btn'>Complete</button>
      <div className='task-item__content'>
        <div className='task-item__text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='task-item__info'>
          <span className='task-item__due-date'>{due}</span>
          <span>
            {tags?.map(tag => (
              <span key={tag} className='task-item__tag'>
                {`#${tag}`}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskItem