import React, {useState} from 'react'

function TodoForm(props) {
    const[input,setInput] = useState("");

    const handleChange= e =>{
        setInput(e.target.value);
    };

    const handleSubmir = e =>{
        e.preventDefault();
        
        // props.onSubmit({
        //     id:Math.floor(Math.random()*100000),
        //     text: input

        // });

        setInput("");

    };
    return (
        <form className="todo-form" onSubmit={handleSubmir}>
            <input type="text" 
            name= "text" 
            className="todo-input" 
            value={input} 
            placeholder="plz add your task"
            onChange={handleChange}/>


            <button className="todo-button">Add</button>



        </form>
    )
}

export default TodoForm
