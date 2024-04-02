import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './home/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-10 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;