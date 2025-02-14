import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { selectAllTasks, taskUpdated } from "./tasksSlice";

const TaskContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  padding: 1rem;
  margin: 1.5rem 0;
  color: black;
  border: 2px solid rebeccapurple;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TaskCompleteButton = styled.button`
  background-color: grey;
  border: 8px solid aliceblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 1.5rem;
`;


const TaskItem = (props) => {
  const {title, due_date, is_completed} = props.task;
  const dispatch = useDispatch();

  const handleComplete = (task) => {
    const { is_completed} = task

    console.log(`Change complete status for ${task.title}!`);
    const inverseComplete = is_completed === "true" ? "false" : "true"
    dispatch(taskUpdated({...task, is_completed: inverseComplete}))
  }

  return (
    <>
      <TaskContainer>
        <TaskCompleteButton onClick={() => handleComplete(props.task)}/>
        <span>{title}</span>
      </TaskContainer>
    </>
  )
}

const TaskList = () => {
  const tasks = useSelector(selectAllTasks)

  return (
    <section>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  )
}

export default TaskList