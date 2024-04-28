import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';



const ListTask = () => {
 
//Nous utilisons le hook  useSelector pour accéder array depuis le Redux.
  const tasks = useSelector((state) => state.tasks.tasks); 
 
  //here we are returning the list of tasks by mapping over the array
  return (
    <div className="container">
      {tasks.map((task) => (
        
        <Task key={task.id} task={task} className="task" />
      ))}
    </div>
  );
};

export default ListTask;