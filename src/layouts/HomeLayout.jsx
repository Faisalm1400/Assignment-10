import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;