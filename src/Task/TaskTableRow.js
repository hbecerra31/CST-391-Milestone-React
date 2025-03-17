import React from "react";
import { format } from "date-fns";

const TaskTableRow = ({ task, onDelete }) => {
    return (
        <tr className="align-middle">
            <td className="text-center">{task.id}</td>
            <td>{task.task}</td>
            <td className="text-center">{task.dueDate ? format(new Date(task.dueDate), "dd-MMM-yyyy") : ""}</td>
            <td className="text-center">
                <span
                    className={`badge ${
                        task.priority === "High"
                            ? "bg-danger"
                            : task.priority === "Medium"
                            ? "bg-warning text-dark"
                            : "bg-success"
                    }`}
                >
                    {task.priority}
                </span>
            </td>
            <td className="text-center">
                <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => window.location.href = `/task/view/${task.id}`}
                >
                    View
                </button>
                <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => window.location.href = `/task/edit/${task.id}`}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(task.id)} // Call the delete function
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskTableRow;