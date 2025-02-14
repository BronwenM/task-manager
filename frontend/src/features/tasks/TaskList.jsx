import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { selectAllTasks } from "./tasksSlice";

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
  const {title, due_date} = props;

  return (
    <>
      <TaskContainer>
        <TaskCompleteButton />
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
        <TaskItem key={task.id} title={task.title} due_date={task.due_date} />
      ))}
    </section>
  )
}

export default TaskList