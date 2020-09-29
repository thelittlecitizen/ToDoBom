import React from "react"

const TodoForm = () => {
    return(
        <form>
            <input type ="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                {/* <i className="fas fa-plus-square"></i> */}
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value ="all">all</option>
                    <option value="completed">done</option>
                    <option value="uncompleted">nodone</option>
                </select>

            </div>
        </form>

    );
}
export default TodoForm
