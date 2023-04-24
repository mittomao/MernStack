import { useEffect, useState } from "react";
import TodoChild from "./../Components/TodoChild";
const Home = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch('/api/todo');
            const json = await response.json();

            if (response.ok) {
                setTodos(json);
            }
        }

        fetchTodo();
    }, []);

    return (
        <div className="home-page">
            <div className="todo">
                <div className="task-input">
                    <ion-icon name="create-outline"></ion-icon>
                    <input type="text" placeholder="Add a New Task + Enter" />
                </div>
                <div className="controls">
                    <div className="filters">
                        <span className="active" id="all">All</span>
                        <span id="pending">Pending</span>
                        <span id="completed">Completed</span>
                    </div>
                    <button type="button" className="clear-btn">Clear All</button>
                </div>
                <ul className="task-box">
                    {
                        todos && todos.map((todo, index) => (
                            <TodoChild key = {todo._id} todo = {todo}></TodoChild>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home;