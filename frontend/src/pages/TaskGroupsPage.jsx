import React from 'react'
import { TaskGroupPanel } from '../components'
import reactImage from '../assets/react.svg'

const TaskGroupsPage = () => {
  return (
    <>
      <h1>Groups Page</h1>
      <div className='task-groups-page__panels' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem'}}>
        <TaskGroupPanel title="Example Title" colour="purple" icon={reactImage} link="work" />
        <TaskGroupPanel title="Example Title" colour="blue" />
        <TaskGroupPanel title="Example Title" colour="emerald" icon={reactImage} />
        <TaskGroupPanel title="Example Title" colour="orange" />
      </div>
    </>
  )
}

export default TaskGroupsPage