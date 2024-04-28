import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS, DELETE_TASK } from '../actions/actionTypes';


const initialState = {
  tasks: [], //the empty array to store tasks as an initialisation
  filterType: 'all', //here we set the default filter type as "all" to display all tasks initialement 
};

//this function is made to manage tasks state
const taskReducer = (state = initialState, action) => { //the state represents the current state of the task reducer, it defzults to initialState if no state is there and the action represents the action dispatched to reducer
  //this switch statement hadles the different actions types
  switch (action.type) {
    //this case is reserved to ADD_TASK action type
    case ADD_TASK:
      return {
        ...state, //here we are returning a new state object with the existing ones thanks to the spread properties
        tasks: [ //it updates the tasks array and adding the new task objct
          ...state.tasks,
            {
            id: state.tasks.length + 1, //it helps us to generate a unique ID for the new task
            description: action.payload.description, //we are extracting task description from action payload by this code
            isDone: false, //isDone is set to false for the new task
          },
        ],
      };

      //this case is made to the EDIT_TASK action type
    case EDIT_TASK:
      return {
        ...state,
        //it updates the tasks array by mapping over each one of them, if the task ID match the ID in the action payload, it will create a new create a new task object with updated description otherwise it returns the original one
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

      //the case that handles the TOGGLE_TASKS action type
    case TOGGLE_TASK:
      return {
        ...state,
        //if the task ID match the one in action payload it creates a new task object with isDone property toggle, otherwise it returns the main one
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
      
      //the case that handles FILTER_TASKS action type
    case FILTER_TASKS:
      return {
        ...state,
        //its main function is updating the filtertype property with the value provided in the action payload
        filterType: action.payload.filterType,
      };

      //the responsible case for DELETE_TASK action type
    case DELETE_TASK:
      return {
        ...state,
//this code update the task array and filter the task with the provided ID
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default taskReducer;