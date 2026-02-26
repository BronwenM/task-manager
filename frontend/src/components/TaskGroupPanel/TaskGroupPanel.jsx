import { Link } from 'react-router-dom';
import './TaskGroupPanel.scss';
import reactImage from '../../assets/react.svg'


const TaskGroupPanel = ({ title, icon, colour, link, tasks, id }) => {
  const taskCount = tasks?.length ?? 0;

  return (
    <Link to={link ? `/groups/${id}/${link}` : `/groups/${id}/${title}`} className={`task-group-panel ${colour}`}>
      {/* {icon && <img src={icon} alt={`${title} icon`} />} */}
      {icon && <img src={reactImage} alt={`${title} icon`} />}
      
      <div className='task-group-panel__text'>
        <span>
          <h3>{title}</h3>
          <p>{taskCount} tasks in group</p>
        </span>
        <span className='task-group__arrow'>➔</span>
      </div>
    </Link>
  )
}

export default TaskGroupPanel