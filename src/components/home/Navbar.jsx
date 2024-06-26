import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const routes = [
        { name: "Home", path: '/', id: 1 },
        { name: "Login", path: 'login', id: 3 },
        { name: "Register", path: '/register', id: 2 },
    ]
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">module 51</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            routes.map(route => <li key={route.id}><NavLink to={`${route.path}`}>{route.name}</NavLink></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;