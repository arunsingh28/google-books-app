import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Register = () => {
    useEffect(() => {
        document.title = "Login"
        document.getElementById('navAtt-Home').classList.remove('active')
        document.getElementById('navAtt-Login').classList.remove('active')
        document.getElementById('navAtt-Register').classList.add('active')
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Navbar />
            <div class="global-container container px-5 mt-5">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Register with Book App</h3>
                        <div class="card-text">

                            {/* message */}
                            {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}

                            <form onSubmit={handleRegister} autoComplete="off">
                                <div class="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        autoComplete="off"
                                        className="form-control form-control-sm" id="name" aria-describedby="name" />
                                </div>
                                <div class="form-group mt-2">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        autoComplete="off"
                                        className="form-control form-control-sm" id="email" aria-describedby="email" />
                                </div>
                                <div class="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        autoComplete="off"
                                        className="form-control form-control-sm"
                                        id="password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>

                                <div class="sign-up mt-2">
                                    Already have an account? <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register