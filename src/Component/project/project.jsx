import React from 'react';
import Navbar from '../navbar/navbar';
import { Outlet } from 'react-router';

const Project = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Project;