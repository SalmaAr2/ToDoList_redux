import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import AddTask from './components/AddTask';
import ListTask from './components/TaskList';
import './App.css';


const store = createStore(rootReducer); //we first have to create a redux store using the creatStore from Redux, and we initializate it with the rootredux to combines all reducers in a single reduce

const App = () => {
  return (
    <Provider store={store}> {/*we are here surrounding the entire app with the provider component from react redux, beacause it allows the redux store to be accessible by all the components*/}
      <div className="container">
        <h1>My To-Do List</h1>
  {/*here we are rendering the AddTask component to allow users to add new tasks*/}
        <AddTask />
{/*and rendring here the ListTask component to display the list of tasks*/}       
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;