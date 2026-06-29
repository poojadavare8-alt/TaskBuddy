import React from 'react';

export default function TaskList({ tasks, updateTask, deleteTask }) {

    const toggleComplete = (task) => {
        updateTask({
            ...task,
            completed: !task.completed
        });
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={task.completed ? "completed" : ""}
                >
                    <div>
                        <h3>{task.text}</h3>

                        <small>
                            <strong>Priority:</strong> {task.priority}
                        </small>

                        <br />

                        <small>
                            <strong>Category:</strong> {task.category}
                        </small>

                        <br />

                        <small>
                            <strong>Due Date:</strong>{" "}
                            {task.dueDate || "No Due Date"}
                        </small>
                    </div>

                    <div>
                        <button
                            className="complete-btn"
                            onClick={() => toggleComplete(task)}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}