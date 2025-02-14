import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Get ingredients for dinner",
    "due_date": "2025-02-20T00:00:00.000Z",
    "is_completed": "false"
  },
  {
    "id": 2,
    "title": "Finish project report",
    "description": "Complete the final section of the report",
    "due_date": "2025-02-18T00:00:00.000Z",
    "is_completed": "false"
  },
  {
    "id": 3,
    "title": "Call John",
    "description": "Discuss the new project updates with John",
    "due_date": "2025-02-15T00:00:00.000Z",
    "is_completed": "true"
  }
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskCreated: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, description, due_date) {
        return {
          payload: {id: nanoid(), title, description, due_date, is_completed: "false"}
        }
      }
    },
    taskUpdated: {
      reducer(state, action) {
        const {id, title, description, due_date} = action.payload
        console.log(action.payload)
        const taskWithId = state.find(task => task.id == id)

        if(taskWithId) {
          taskWithId.title = title
          taskWithId.description = description
          taskWithId.due_date = due_date
        } else {
          console.error("Failed to update record")
        }
      }
    },
    taskDeleted: {
      reducer(state, action) {
        const {id} = action.payload
        const taskWithId = state.find(task => task.id == id)
        
        if(taskWithId) {
          return state.filter(task => task.id !== id)
        }

      }
    }
  }
})

export default tasksSlice.reducer

//Export actions
export const {taskCreated, taskUpdated, taskDeleted} = tasksSlice.actions

//Selectors to get state data
export const selectAllTasks = (state) => state.tasks
export const selectTaskById = (state, taskId) => state.tasks.find(task => task.id === taskId)