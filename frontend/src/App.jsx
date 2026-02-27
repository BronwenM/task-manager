import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditTaskPage from './pages/EditTaskPage'
import NewTaskPage from './pages/NewTaskPage'
import { Layout } from './components/index'
import TaskGroupsPage from './pages/TaskGroupsPage'
import GroupDisplayPage from './pages/GroupDisplayPage'



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Navigate to='/' />} />
          
          <Route path='/profile' element={<h1>Profile Page</h1>} />
          
          <Route path='/tasks' element={<h1>All Tasks Page</h1>} />
          <Route path='/tasks/:taskId' element={<h1>Single Task Page</h1>} />
          <Route path='/tasks/new' element={<NewTaskPage />} />
          <Route path='/tasks/edit/:taskId' element={<EditTaskPage />} />

          <Route path='/groups' element={<TaskGroupsPage />} />
          <Route path='/groups/:groupId/:groupTitle' element={<GroupDisplayPage />} />

          <Route path='/tags' element={<h1>Tags Page</h1>} />

          <Route path='/calendar' element={<h1>Calendar Page</h1>} />

          <Route path='/settings' element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
