import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  status: 'idle',
  error: null
}

//CREATE
export const postTasks = createAsyncThunk(
  'tasks/postTasks',
  async () => {
    
  }
)

//READ
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const res = await fetch("http://localhost:3000/api/tasks")  
    return await res.json()
  },
  {
    condition(arg, thunkApi) {
      const tasksStatus = selectTasksStatus(thunkApi.getState())
      if(tasksStatus !== 'idle') {
        return false
      }
    }
  }
)

//UPDATE

//DELETE

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskCreated: {
      reducer(state, action) {
        state.tasks.push(action.payload)
      },
      prepare(title, description, due_date) {
        return {
          payload: {id: nanoid(), title, description, due_date, is_completed: "false"}
        }
      }
    },
    taskUpdated: {
      reducer(state, action) {
        const {id, title, description, due_date, is_completed} = action.payload
        const taskWithId = state.tasks.find(task => task.id == id)

        if(taskWithId) {
          taskWithId.title = title
          taskWithId.description = description
          taskWithId.due_date = due_date
          taskWithId.is_completed = is_completed
        } else {
          console.error("Failed to update record")
        }
      }
    },
    taskDeleted: {
      reducer(state, action) {
        const {id} = action.payload
        const taskWithId = state.tasks.find(task => task.id == id)
        
        if(taskWithId) {
          return state.tasks.filter(task => task.id !== id)
        }

      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.status = 'pending'
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.tasks.push(...action.payload)
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Unknown Error'
    })
  }
})

export default tasksSlice.reducer

//Export actions
export const {taskCreated, taskUpdated, taskDeleted} = tasksSlice.actions

//Selectors to get state data
export const selectAllTasks = (state) => state.tasks.tasks
export const selectTaskById = (state, taskId) => state.tasks.tasks.find(task => task.id === taskId)
export const selectTasksStatus = (state) => state.tasks.status
export const selectTasksError = (state) => state.tasks.error