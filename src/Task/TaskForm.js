import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";
import dataSource from "../dataSource";

const TaskView = ({ taskList, onSaveTask }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const isEditMode = location.pathname.includes("edit");
    const isCreateMode = location.pathname.includes("new");
    const isViewMode = !isEditMode && !isCreateMode;

    const task = taskList.find((task) => task.id === parseInt(id)) || {
        id: "",
        task: "",
        dueDate: null,
        priority: "Low",
    };

    const [formData, setFormData] = useState({
        id: task.id,
        task: task.task,
        dueDate: task.dueDate ? format(new Date(task.dueDate), "yyyy-MM-dd") : "",
        priority: task.priority,
    });

    useEffect(() => {
        if (isEditMode && task) {
            setFormData({
                id: task.id,
                task: task.task,
                dueDate: task.dueDate ? format(new Date(task.dueDate), "yyyy-MM-dd") : "",
                priority: task.priority,
            });
        }
    }, [task, isEditMode]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Ensure `dueDate` is set to null if it's blank
        const processedFormData = {
            ...formData,
            dueDate: formData.dueDate === "" ? null : formData.dueDate,
        };

        console.log("Processed form data:", processedFormData);

        try {
            if (isCreateMode) {
                await dataSource.post("/tasks", processedFormData);
                console.log("Task created successfully:", processedFormData);
            } else if (isEditMode) {
                await dataSource.put(`/tasks/${task.id}`, processedFormData);
                console.log("Task updated successfully:", processedFormData);
            }

            onSaveTask(processedFormData);
            navigate("/");
        } catch (error) {
            console.error("Error saving task:", error);
        }
    };

    if (isViewMode && !task.id) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Task Not Found</h4>
                    <p>The task you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">
                        {isCreateMode ? "Create Task" : isEditMode ? "Edit Task" : "Task Details"}
                    </h2>
                </div>
                <div className="card-body">
                    {isViewMode ? (
                        <>
                            <div className="row mb-3">
                                <div className="col-4 text-end fw-bold">Task ID:</div>
                                <div className="col-8">{task.id}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 text-end fw-bold">Task:</div>
                                <div className="col-8">{task.task}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 text-end fw-bold">Due Date:</div>
                                <div className="col-8">{format(new Date(task.dueDate), "dd-MMM-yyyy")}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 text-end fw-bold">Priority:</div>
                                <div className="col-8">
                                    <span
                                        className={`badge ${task.priority === "High"
                                                ? "bg-danger"
                                                : task.priority === "Medium"
                                                    ? "bg-warning text-dark"
                                                    : "bg-success"
                                            }`}
                                    >
                                        {task.priority}
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="task" className="form-label fw-bold">
                                    Task
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="task"
                                    name="task"
                                    value={formData.task}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dueDate" className="form-label fw-bold">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dueDate"
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label fw-bold">
                                    Priority
                                </label>
                                <select
                                    className="form-select"
                                    id="priority"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {isCreateMode ? "Create Task" : "Save Changes"}
                            </button>
                        </form>
                    )}
                </div>
                <div className="card-footer text-end">
                    {isViewMode && (
                        <button
                            className="btn btn-warning me-2"
                            onClick={() => navigate(`/task/edit/${task.id}`)}
                        >
                            Edit
                        </button>
                    )}
                    <button className="btn btn-secondary" onClick={() => navigate("/")}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskView;