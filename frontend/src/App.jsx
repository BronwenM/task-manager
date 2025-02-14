import styled from 'styled-components'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditTaskPage from './pages/EditTaskPage'

const ContentContainer = styled.section`
  background:rgb(240, 240, 240);
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  margin-left: 150px;
  min-height: 100vh;
`
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`


function App() {
  return (
    <Router>
      <LayoutContainer>
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/tasks/new' element={<h2>Create new</h2>} />
            <Route path='/tasks/edit/:id' element={<EditTaskPage/>} />
          </Routes>          
        </ContentContainer>
      </LayoutContainer>
    </Router>
  )
}

export default App
