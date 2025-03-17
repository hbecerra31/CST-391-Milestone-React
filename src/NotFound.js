import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1 className="display-1 text-danger">404</h1>
                            <h2 className="mb-4">Page Not Found</h2>
                            <p className="lead">
                                Oops! The page you are looking for does not exist. It might have been removed, renamed, or is temporarily unavailable.
                            </p>
                            <img
                                src="https://via.placeholder.com/400x200?text=404+Error"
                                alt="404 Not Found"
                                className="img-fluid my-4"
                            />
                            <Link to="/" className="btn btn-primary btn-lg">
                                <i className="bi bi-house-door me-2"></i>Go Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;