import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  color: black;
  border-radius: 8px;
  transition: all 0.25s;

  background-color: #fefefe;
  border: none;
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
`

const DeleteButton = styled.button`
  background:rgb(197, 26, 26);
  color: #fff;
  padding: 0.5rem 1.5rem;

  &:hover {
    background: rgb(136, 17, 17);
  }
`
const EditButton = styled.button`
  background: none;
  color:rgb(50, 106, 197);
  border: 1px solid rgb(50, 106, 197);
  margin-right: 0.5rem;
  padding: 0.5rem 1.5rem;

  &:hover {
    background: rgb(50, 106, 197);
    color: #fff;
  }
`
const ButtonLayout = styled.div`
  margin-top: 2rem;
  align-self: flex-end;
`

const TaskDetails = (props) => {
  const {is_completed, description, due_date} = props.task

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  
  return (
    <Details>
          <h3>Task Details</h3>
          <h5><em>{is_completed === "true" ? "Completed": "Incomplete"}</em></h5>
          <p>{description}</p>
          <p>Due {new Date(due_date).toLocaleDateString("en-GB", dateOptions)}</p>
          <ButtonLayout> 
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </ButtonLayout>
    </Details>
  )
}

export default TaskDetails