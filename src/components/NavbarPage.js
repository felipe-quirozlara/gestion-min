import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const NavbarPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default NavbarPage