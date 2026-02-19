import TaskItem from "../TaskItem/TaskItem"
import './TaskList.scss'

const TaskList = ({ tasks }) => {
  return (
    <section className="task-list">
      <div className="task-list__list">
        {tasks?.map(task => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </section>
  )
}

export default TaskList