import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Books</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <li className="nav-item rounded">
                                <Link to="/" className="nav-link" id='navAtt-Home' aria-current="page"><i className="bi bi-house-fill me-2"></i>Home</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link to="/register" className="nav-link" id='navAtt-Register' ><i className="bi bi-people-fill me-2"></i>Regsiter</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link to={"/login"} className="nav-link" id='navAtt-Login'><i className="bi bi-telephone-fill me-2 bg-primary"></i>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar