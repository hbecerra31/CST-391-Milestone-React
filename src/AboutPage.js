import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h2 className="mb-0">About This Application</h2>
                        </div>
                        <div className="card-body">
                            <p className="lead">
                                Welcome to <strong>My Tasks</strong>, a simple and intuitive task management application designed to help you stay organized and productive.
                            </p>
                            <p>
                                This application allows you to:
                            </p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Create new tasks with priorities and due dates.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-pencil-fill text-warning me-2"></i>
                                    Edit existing tasks to keep them up-to-date.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-trash-fill text-danger me-2"></i>
                                    Delete tasks you no longer need.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-eye-fill text-info me-2"></i>
                                    View task details in a clean and organized layout.
                                </li>
                            </ul>
                            <p>
                                This project was built using <strong>React</strong> and <strong>Bootstrap</strong> to provide a responsive and user-friendly interface.
                            </p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="/" className="btn btn-primary">
                                <i className="bi bi-house-door me-2"></i>Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;