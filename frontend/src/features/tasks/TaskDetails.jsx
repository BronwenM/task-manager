import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { taskDeleted } from './tasksSlice'

const Details = styled.div`
  width: 100%;
  margin: -1rem 0 2rem;
  color: black;
  border-radius: 8px;
  transition: all 0.25s;

  background-color: ${props => props.$completed ? "#dee3cf" : "#fefefe"} ;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  box-shadow: #0000003b 3px 3px 3px;


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
  background: #fff;
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
  const {id, is_completed, description, due_date} = props.task
  const dispatch = useDispatch()

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const onDelete = () => {
    dispatch(taskDeleted({id}))
  }
  
  return (
    <Details $completed={is_completed === "true"}>
          <h3>Task Details</h3>
          <h5><em>{is_completed === "true" ? "Completed": "Incomplete"}</em></h5>
          <p>{description}</p>
          <p>Due {new Date(due_date).toLocaleDateString("en-GB", dateOptions)}</p>
          <ButtonLayout> 
            <Link to={`/tasks/edit/${id}`}><EditButton>Edit</EditButton></Link>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          </ButtonLayout>
    </Details>
  )
}

export default TaskDetails