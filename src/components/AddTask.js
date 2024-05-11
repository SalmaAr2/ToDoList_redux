import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";


const AddTask = ()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

// Nous utilisons 'useDispatch' pour accéder à la fonction de dispatch depuis le store Redux.
    const dispatch = useDispatch();
// Voici la fonction pour gérer la soumission du formulaire.
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim() && !description.trim()){
            alert('Please enter task name ans description');
            return;
        }

        dispatch(addTask(name,description));
        setName('');
        setDescription('');
    };
    


    return (
        <>
            <div>
            
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add your today's task" value={name} onChange={(e) => setName(e.target.value)}/>
                    {/* <input type="text" placeholder="Add a Description" value={description} onChange={(e)=> setDescription(e.target.value)}/> */}
                    <button type="submit">Add Task</button> <br/>
                </form>
               
            </div>
        </>
    )
}

export default AddTask