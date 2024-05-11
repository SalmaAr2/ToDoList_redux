import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { filterTasks  } from '../actions/taskActions';





const ListTask = () => {
 
//Nous utilisons le hook  useSelector pour accéder array depuis le Redux.
  const tasks = useSelector((state) => state.tasks.tasks); 
  const filters = useSelector((state) => state.tasks.filterType);

  const dispatch = useDispatch();

  const filteredTasks= tasks.filter((task) => {
    switch(filters){
      case 'all' : 
        return true;
      case 'done' : 
        return task.isDone;
      case 'notDone' :
        return !task.isDone;
        default:
          return task
    }
  })

 
  //here we are returning the list of tasks by mapping over the array
  return (
    <div className="container">

      <div >
                    <button onClick={()=>dispatch(filterTasks('all'))}  type="submit" >All</button>
                    <button onClick={()=>dispatch(filterTasks('done'))}  type="submit">Done</button>
                    <button onClick={()=>dispatch(filterTasks('notDone'))} type="submit">Not Done</button>
                </div>
      {filteredTasks.map((task) => (
        
        <Task key={task.id} task={task} className="task" />
      ))}

      

    </div>
  );
};

export default ListTask;