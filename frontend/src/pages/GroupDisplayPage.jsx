import { Link, useParams, useNavigate } from "react-router-dom"
import { allTasks } from "../assets/Static Data/tasks";
import { taskGroups } from "../assets/Static Data/taskGroups";
import { TaskList } from "../components";

const GroupDisplayPage = () => {
  const { groupId, groupTitle } = useParams();

  /* use groupId to fetch group data or perform other actions */
  const currGrp = taskGroups.find(group => group.id === parseInt(groupId));

  const filteredTasks = allTasks.filter(task => currGrp.tasks.includes(task.id));

  let navigate = useNavigate();

  return (
    <>
      <h1><Link to={navigate(-1)} >Back</Link>Group Display Page</h1>
      <p>Group ID: {groupId}</p>
      <p>Group Title: {groupTitle}</p>
      {/* list of tasks associated with groupID */}
      {<TaskList tasks={filteredTasks} />  }
    </>
  )
}

export default GroupDisplayPage