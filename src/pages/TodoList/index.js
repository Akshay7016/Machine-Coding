import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const TodoList = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const [editItem, setEditItem] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!todoText.trim()) {
            return alert("Please Enter a Valid Todo");
        }

        if (editItem) {
            const editedTodos = todos.map((ele) => ele.id === editItem.id ? { ...ele, todo: todoText.trim() } : ele);

            setTodos(editedTodos);
            setEditItem(null);
        } else {
            setTodos(prev => [...prev, { id: uuid(), todo: todoText.trim() }]);
        }

        setTodoText("");
    };

    const removeTodo = (todoId) => {
        const filteredTodos = todos.filter(({ id }) => id !== todoId);
        setTodos(filteredTodos);
    };

    const editTodo = ({ todo, id }) => {
        setTodoText(todo);
        setEditItem({ todo, id });
        document.querySelector("#todo-input").focus();
    };

    return (
        <div className='font-sans max-w-[500px] mx-auto'>
            <h1 className='text-[50px] text-center mb-4'>Todo List</h1>
            <form onSubmit={handleSubmit} className='flex gap-3 h-[40px] mb-[20px]'>
                <input
                    id='todo-input'
                    type='text'
                    placeholder='Enter Your Todo'
                    value={todoText}
                    onChange={(event) => setTodoText(event.target.value)}
                    className='flex-1 px-[10px] border-[2px] border-gray-300 rounded-md'
                />
                <button
                    type='submit'
                    className='px-[20px] bg-[#32cd32] text-white border-gray-300 rounded-md'
                >
                    {editItem ? "Edit Todo" : "Add Todo"}
                </button>
            </form>

            <ul>
                {
                    todos.map(({ todo, id }) => (
                        <li
                            key={id}
                            className='flex justify-between bg-white p-[10px] border rounded-md mb-[10px] shadow-md'
                        >
                            <span className='flex items-center'>{todo}</span>
                            <div className='flex gap-3'>
                                <button
                                    className='w-[35px] h-[35px] border border-gray-400 rounded-md'
                                    onClick={() => editTodo({ todo, id })}
                                >
                                    ✏️
                                </button>
                                <button
                                    className='w-[35px] h-[35px] border border-gray-400 rounded-md'
                                    onClick={() => removeTodo(id)}
                                >
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};
