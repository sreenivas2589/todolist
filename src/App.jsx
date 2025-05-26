import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Todolist from './Components/Todolist'

function App() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')


    function Clearall() {
        if (tasks.length === 0) {

            alert("No Tasks To Clear")
        }

        else {
            setTasks([])
        }
    }


    console.log(tasks)

    return (
        <div className="entirecomponent">
            <div>
                <h1>To Do List</h1>
                <a href="https://github.com/sreenivas2589/todolist" style={{ textAlign: "center", marginInline: "40px", fontSize: "1.5rem", textDecoration: "none", color: "white" }} target="_blank">Github</a>
            </div>

            <div className="headerlist">

                <Header tasks={tasks} setTasks={setTasks} input={input} setInput={setInput} /> 

            </div>

            <div>

                <Todolist tasks={tasks} setTasks={setTasks}/>

            </div>

            {/*event handling to clear all tasks*/}
            <button onClick={() => Clearall()}>Clear All</button>
            
        </div>
    )
     
}

export default App
