import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Get ingredients for dinner",
    "due_date": "2025-02-20T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Finish project report",
    "description": "Complete the final section of the report",
    "due_date": "2025-02-18T00:00:00.000Z"
  },
  {
    "id": 3,
    "title": "Call John",
    "description": "Discuss the new project updates with John",
    "due_date": "2025-02-15T00:00:00.000Z"
  }
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    tasksCreated: {
      reducer(state, action) {
        state.tasks.push(action.payload)
      }
    }
  }
})

export default tasksSlice.reducer

//Selectors to get state data
export const selectAllTasks = (state) => state.tasks
export const selectTaskById = (state, taskId) => state.tasks.find(task => task.id === taskId)