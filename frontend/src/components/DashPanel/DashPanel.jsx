import './DashPanel.scss';
import { TaskList } from '../index';
import { allTasks } from '../../assets/Static Data/tasks';

const DashPanel = () => {
  return (
    <div className='dash-panel-grp'>
      <div className='dash-panel'>
        <h2>Due Today</h2>
        {allTasks.filter(task => new Date(task.dueDate).toDateString() === new Date().toDateString()).length > 0 ? (
          <p>{allTasks.filter(task => new Date(task.dueDate).toDateString() === new Date().toDateString()).length}</p>
        ) : (
          <p>0</p>
        )}
      </div>
      <div className='dash-panel'>
        <h2>Upcoming Tasks</h2>
        {allTasks.filter(task => new Date(task.dueDate) > new Date()).length > 0 ? (
          <p>{allTasks.filter(task => new Date(task.dueDate) > new Date()).length}</p>
        ) : (
          <p>0</p>
        )}
      </div>
      <div className='dash-panel'>
        <h2>Overdue Tasks</h2>
        {allTasks.filter(task => new Date(task.dueDate) < new Date()).length > 0 ? (
          <p>{allTasks.filter(task => new Date(task.dueDate) < new Date()).length}</p>
        ) : (
          <p>0</p>
        )}
      </div>
    </div>
  )
}

export default DashPanel