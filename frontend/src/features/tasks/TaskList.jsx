import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { selectAllTasks, taskUpdated } from "./tasksSlice";
import { useEffect, useState } from "react";
import TaskDetails from "./TaskDetails";

const TaskContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1.5rem 0;
  color: black;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.25s;
  box-shadow: #0000003b 3px 3px 3px;
  
  border: 2px solid ${props => props.$completed ? "rgb(86, 93, 70)":  "#fff"};
  background-color: ${props => props.$completed ? "#757c60":  "#fefefe"};
  text-decoration: ${props => props.$completed ? "line-through":  "none"};
`;

const TaskTitle = styled.span`
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 1rem 0;
`

const TaskCompleteButton = styled.button`
  background-color: #d9d9d9;
  width: 50px;
  height: 50px;
  margin-right: 1.5rem;
  padding: 6px;

  &:focus {outline: none;}

  border: 6px solid #757c60;

  img {
    visibility: ${props => props.$completed ? "visible" : "hidden"};
    object-fit: fill;
    height: 100%;
  }

  &:hover {
    border: 6px solid rgb(159, 169, 130);
  }
  `;


/* const TaskDetails = styled(TaskContainer)`
  background-color: #fefefe;
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  h3, h5 {
    margin: 0;
  }
  
  h3 {
    text-decoration: underline;
  }
` */

const TaskItem = (props) => {
  const {title, description, due_date, is_completed} = props.task
  const dispatch = useDispatch()
  const [toggleDetails, setToggleDetails] = useState(false);

  const handleComplete = (task) => {
    const { is_completed} = task

    const inverseComplete = is_completed === "true" ? "false" : "true"
    dispatch(taskUpdated({...task, is_completed: inverseComplete}))
  }

  const handleDetailsToggle = () => {setToggleDetails(prev => !prev)}

  return (
    <>
      <TaskContainer  $completed={is_completed === "true"}>
        <TaskCompleteButton $completed={is_completed === "true"} onClick={() => handleComplete(props.task)}><img src="../assets/checkmark.png" alt="task complete checkmark"/></TaskCompleteButton>
        <TaskTitle onClick={handleDetailsToggle} >{title}</TaskTitle>
      </TaskContainer>
      {toggleDetails && <TaskDetails task={props.task}/>
        // <TaskDetails>
        //   <h3>Task Details</h3>
        //   <h5><em>{is_completed === "true" ? "Completed": "Incomplete"}</em></h5>
        //   <p>{description}</p>
        //   <div> 
        //     <button>Edit</button>
        //     <button>Delete</button>
        //   </div>
        // </TaskDetails>
      }
    </>
  )
}

const TaskList = () => {
  const tasks = useSelector(selectAllTasks)

  return (
    <section>
      <h2>Your Upcoming Tasks</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  )
}

export default TaskList