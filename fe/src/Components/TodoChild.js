import { useState } from "react"

const TodoChild = ({ todo }) => {
    const [isToggle, setToggle] = useState(false);

    const updateStatus = () => {
        
    }

    const showMenu = () => {
        setToggle(!isToggle);
    }

    const hideMenu = (event) => {
        if (!event.target.className.includes('btn-showmenu')) {
            setToggle(false);
        }  
    }

    const editTask = (id) => {
        
    }
    const deleteTask = (id) => {
        
    }

    return (
        <li className="task" onClick={(e) => hideMenu(e)}>
            <label for="0">
                <input onClick={() => updateStatus()} type="checkbox" id="0" />
                <p className="">{todo.title}</p>
            </label>
            <div className="settings">
                <i onClick= {() => showMenu()} className="btn-showmenu uil uil-ellipsis-h"></i>
                <ul className = {"task-menu " + (isToggle ? "show" : "")}>
                    <li onClick= {() => editTask(0, '')}><i className="uil uil-pen"></i>Edit</li>
                    <li onClick= {() => deleteTask(0, 'all')}><i className="uil uil-trash"></i>Delete</li>
                </ul>
            </div>
        </li>
    )
}

export default TodoChild;