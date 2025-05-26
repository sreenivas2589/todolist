// JavaScript source code

function Todoitem(props) {
    
    const { id,message, completed,Checkedfun,Deletefun,Editfun} = props 

    return (
        <div className="indexandmessage">
            
            <div style={{ fontSize: "1.4rem", textDecoration: completed ? "line-through" : "none" }}>{message}</div>
            <div className="checkeditdel">
                <input type="checkbox" onClick={() => Checkedfun(id)} defaultChecked={completed} name="checkbox" ></input>

                {/*event handling for deleting exisiting tasks*/}
                <button onClick={() => Deletefun(id)} ></button>

                {/*event handling to edit exisiting tasks*/}
                <button onClick={() => Editfun(id, message)}></button>
            </div>
           
        </div>
    )
}

export default Todoitem