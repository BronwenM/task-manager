import styled from 'styled-components'
import Navbar from './components/Navbar'
import TaskList from './features/tasks/TaskList'
import NewTaskForm from './features/tasks/NewTaskForm'

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

const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

function App() {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <MainHeader>What Do You Have To Do?</MainHeader>
        <NewTaskForm />
        <TaskList />
      </ContentContainer>
    </LayoutContainer>
  )
}

export default App
