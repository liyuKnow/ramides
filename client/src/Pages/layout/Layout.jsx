import React from 'react'
import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '../../components/index';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout