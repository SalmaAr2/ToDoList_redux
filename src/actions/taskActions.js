// Ici, nous importons toutes les constantes de type d'action depuis le fichier actionTypes.
import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS, DELETE_TASK } from './actionTypes';

//this action creator function named addTask, takes (description) as a prop
export const addTask = (description) => ({
  //here we have the type of action as ADDTASK
  type: ADD_TASK,
  payload: {
    description,
  },
});

export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: {
    id,
   
  },
});

// Créateur d'action pour basculer entre les états des tâches. Il prend l'identifiant en tant que paramètre avec TOGGLE_TASK comme type et définit une charge utile de l'action contenant l'identifiant de la tâche.
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: {
    filterType,
  },
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
      id,
    },
  });