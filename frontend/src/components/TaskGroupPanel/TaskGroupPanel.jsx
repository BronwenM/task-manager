import { Link } from 'react-router-dom';
import './TaskGroupPanel.scss';

const TaskGroupPanel = ({ title, icon, colour, link, taskCount }) => {
  return (
    <Link to={link ? `/groups/${link}` : `/groups/${title}`} className={`task-group-panel ${colour}`}>
      {icon && <img src={icon} alt={`${title} icon`} />}
      <div className='task-group-panel__text'>
        <span>
          <h3>{title}</h3>
          <p>{taskCount ?? 0} tasks in group</p>
        </span>
        <span className='task-group__arrow'>➔</span>
      </div>
    </Link>
  )
}

export default TaskGroupPanel