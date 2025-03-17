import React from "react";
import { useNavigate } from "react-router-dom";
import TaskTableRow from "./TaskTableRow";

const TaskTable = ({ taskList, onDelete }) => {
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Task List</h2>
                </div>
                <div className="card-body">
                    {taskList.length === 0 ? (
                        <div className="alert alert-warning text-center" role="alert">
                            <h4 className="alert-heading">No Tasks Found</h4>
                            <p>There are currently no tasks to display. Add a new task to get started!</p>
                        </div>
                    ) : (
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Task</th>
                                    <th>Due Date</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taskList.map((task) => (
                                    <TaskTableRow
                                        key={task.id}
                                        task={task}
                                        onDelete={onDelete} // Pass the delete function
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-primary" onClick={() => navigate(`/task/new`)}>
                        Add New Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;