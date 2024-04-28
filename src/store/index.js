import { createStore } from 'redux'; //it imports the creatStore function from redux
import rootReducer from '../reducers';


//La principale raison de ce code est de créer un store Redux en passant le rootReducer à la fonction createStore.
const store = createStore(rootReducer);

export default store;