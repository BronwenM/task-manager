import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { fetchTasks, selectAllTasks, selectTasksError, selectTasksStatus, taskUpdated } from "./tasksSlice";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const ChevronIcons = styled.svg`
    width: 30px;
    height 30px;
    transition: all 0.25s;
    transform: rotate(${props => props.$toggleOpen ? "180deg" : "0deg"})
  `

const TaskItem = (props) => {
  const {title, description, due_date, is_completed} = props.task
  const dispatch = useDispatch()

  const [toggleDetails, setToggleDetails] = useState(false);



  const handleComplete = (task) => {
    const { is_completed } = task

    const inverseComplete = is_completed === "true" ? "false" : "true"
    dispatch(taskUpdated({...task, is_completed: inverseComplete}))
  }

  const handleDetailsToggle = () => {setToggleDetails(prev => !prev)}

  return (
    <>
      <TaskContainer  $completed={is_completed === "true"}>
        <TaskCompleteButton $completed={is_completed === "true"} onClick={() => handleComplete(props.task)}><img src="../assets/checkmark.png" alt="task complete checkmark"/></TaskCompleteButton>
        <TaskTitle onClick={handleDetailsToggle} >
          {title}
          <ChevronIcons $toggleOpen={toggleDetails} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></ChevronIcons>
        </TaskTitle>
      </TaskContainer>
      {toggleDetails && <TaskDetails task={props.task}/>}
    </>
  )
}

const TaskList = () => {
  const tasks = useSelector(selectAllTasks)
  const dispatch = useDispatch()
  const tasksStatus = useSelector(selectTasksStatus)
  const tasksError = useSelector(selectTasksError)

  useEffect(() => {
    if(tasksStatus === 'idle') {
      dispatch(fetchTasks())
    }
  }, [tasksStatus, dispatch])

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