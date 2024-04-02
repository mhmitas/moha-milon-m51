import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext2 } from '../proveders/AuthProvider2';

const Login = () => {

    function handleLogin(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1><br />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body space-y-4">
                        <input
                            name='email'
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            name='password'
                            type="text"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            type="submit"
                            placeholder="Type here"
                            value="Login"
                            className="btn btn-success w-full max-w-xs" />

                        <p>New to module-51? Please <Link to="/register" className='link link-primary'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

/**
 * <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body space-y-2">
                            <input
                                name='email'
                                type="text"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs" />
                            <input
                                name='password'
                                type="text"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" />
                            <input
                                type="submit"
                                placeholder="Type here"
                                className="btn btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
 */