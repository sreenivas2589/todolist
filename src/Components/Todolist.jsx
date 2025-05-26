// JavaScript source code
import Todoitem from "./Todoitem";
import { useState } from 'react'

function Todolist(props) {
    const { tasks, setTasks } = props

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskText, setEditedTaskText] = useState('');

    function deleteTasks(idno) {

        const newTasks = tasks.filter( item => item.id !== idno);
        setTasks(newTasks);
    }

    const handleEditTask = (id, text) => {
        setEditingTaskId(id);
        setEditedTaskText(text);
    };

    const handleSaveTask = () => {
        setTasks(tasks.map(task =>
            task.id === editingTaskId ? { ...task, message: editedTaskText } : task
        ));
        setEditingTaskId(null);
        setEditedTaskText('');

    };

    function setCheckbox(idno) {
        const newTasks = tasks.map((task) =>
            task.id === idno ? { ...task, completed: !(task.completed) } : task
        );

        setTasks(newTasks);

    }

  
    return (
            <>
                {tasks.map((item) => {
                return (
                    <div key={item.id} className="totaldisplay">
                        {editingTaskId === item.id ? (
                            <div className="editsection">
                                <input
                                    type="text"
                                    value={editedTaskText}
                                    onChange={(e) => setEditedTaskText(e.target.value)} 
                                    name="editinput"
                                />
                                <button onClick={handleSaveTask}>Save</button>
                            </div>
                        ) : (
                            <div className="display">
                                    <div id="todoitem">
                                        <Todoitem key={item.id} id={item.id} message={item.message} completed={item.completed} Checkedfun={setCheckbox} Deletefun={deleteTasks} Editfun={handleEditTask} />
                                    </div> 
                            </div>
                        )}
                        
                       
                        
                    </div>   
                )
                })}
                
            </>

    )
    
}

export default Todolist