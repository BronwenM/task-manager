import React from 'react'
import { TaskGroupPanel } from '../components'
import { taskGroups } from '../assets/Static Data/taskGroups'

const TaskGroupsPage = () => {
  return (
    <>
      <h1>Groups Page</h1>
      <div className='task-groups-page__panels' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {taskGroups.map(group => (
          <TaskGroupPanel key={group.id} {...group} />
        ))}
      </div>
    </>
  )
}

export default TaskGroupsPage