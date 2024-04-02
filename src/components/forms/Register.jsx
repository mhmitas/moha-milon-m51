import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext2 } from '../proveders/AuthProvider2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase/firebase.config';

const Register = () => {
    const { createUser } = useContext(AuthContext2)

    function handleLogin(e) {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(name, email, password);

        // create user in firebase
        // createUser(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body space-y-4">
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full" />
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full" />
                        <input
                            name='password'
                            type="text"
                            placeholder="Password"
                            className="input input-bordered w-full" />
                        <input
                            type="submit"
                            placeholder="Type here"
                            value="Register"
                            className="btn btn-secondary w-full" />
                        <p>Already have an account <Link to="/login" className='link link-primary'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;