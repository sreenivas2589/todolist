// JavaScript source code
import Todolist from "./Todolist"

function Header(props) {
    const { tasks, setTasks, input, setInput } = props

    function handleSubmit() {
        if (input.length == 0) {
            alert('Please enter a task')
        }

        //set tasks with unique key value
        else {
            setTasks([...tasks, { id: "id" + Math.random().toString(20).slice(2), message: input, completed: false }])
            setInput("")
        }

     
    }
    
    console.log(input)
    console.log(tasks)

    return (
        <div className="header">
            <input type="text" name="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter Your Task...."></input>

            {/*event Handling for adding a new to do-item*/}
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )


}

export default Header