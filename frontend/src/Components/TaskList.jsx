import TaskItem from "./TaskItem";

const taskData = [
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
];

const TaskList = () => {
  return (
    <>
      {
        taskData.map((task) => <TaskItem title={task.title} key={task.id}/>)
      }
    </>
  )
}

export default TaskList