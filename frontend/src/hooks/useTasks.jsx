import React, {createContext, useContext, useState} from "react";

const TasksContext = createContext();

export const TasksProvider = (props) => {
  const {children} = props;
  const [allTasks, setAllTasks] = useState([]);

  return (
    <TasksContext.Provider value={{allTasks, setAllTasks}}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TasksContext);

  if(context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider")
  }

  return context;
}