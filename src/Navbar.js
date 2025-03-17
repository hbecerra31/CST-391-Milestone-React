import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="bi bi-list-task me-2"></i>My Tasks
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <i className="bi bi-house-door me-1"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/task/new">
                                <i className="bi bi-plus-circle me-1"></i>New Task
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                <i className="bi bi-info-circle me-1"></i>About
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search tasks"
                            aria-label="Search"
                        />
                        <button className="btn btn-light" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;