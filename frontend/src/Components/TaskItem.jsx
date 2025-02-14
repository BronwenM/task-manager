import React from 'react'
import styled from 'styled-components'

const TaskContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  padding: 1rem;
  margin: 1.5rem;
  color: black;
  border: 2px solid rebeccapurple;
  border-radius: 8px;
`;

const TaskCompleteButton = styled.button`
  background-color: grey;
  border: 8px solid aliceblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
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

export default TaskItem