import styled from 'styled-components'
import Navbar from './components/Navbar'
import TaskList from './features/tasks/TaskList'
import NewTaskForm from './features/tasks/NewTaskForm'

const ContentContainer = styled.section`
  background: #f58a42;
  padding: 2rem;
  height: 100%;
  width: 100%;
`
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

function App() {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <MainHeader>Here's What You Have To Do</MainHeader>
        <NewTaskForm />
        <TaskList />
      </ContentContainer>
    </LayoutContainer>
  )
}

export default App
