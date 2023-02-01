import React from "react";


const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    return (
        <div>
            {
                todos.map((todo) => (
                    <li className="list-item" key={todo.id}>
                        <input
                            type="text"
                            value={todo.title}
                            className="list"
                            onChange={(event) => event.preventDefault()}
                        />
                        <div>
                            <button className="button-edit" onClick={() => handleEdit(todo)}>
                                <abbr title="Edit"><i className="fa fa-edit"></i></abbr>
                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                                <abbr title="Delete"><i className="fa fa-trash"></i></abbr>
                            </button>
                        </div>
                    </li>
                ))
            }
        </div>
    );
};

export { TodosList } 