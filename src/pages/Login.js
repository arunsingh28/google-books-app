import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const handleLogin = () => {
        console.log('login')
    }

    return (
        <div>
            <div class="global-container container px-5 mt-5">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Books app</h3>
                        <div class="card-text">

                            {/* message */}
                            {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}

                            <form onSubmit={handleLogin}>
                                <div class="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" class="form-control form-control-sm" id="email" aria-describedby="email" />
                                </div>
                                <div class="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <Link to="forgot-password" style={{ float: "right", fontSize: "12px" }}>Forgot password?</Link>
                                    <input type="password" class="form-control form-control-sm" id="password" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mt-3">Sign in</button>

                                <div class="sign-up mt-2">
                                    Don't have an account? <Link to="register">Create One</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login