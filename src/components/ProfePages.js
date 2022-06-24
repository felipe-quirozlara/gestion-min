import React from 'react'
import NavbarProfe from './NavbarProfe'
import PrivateHeader from './PrivateHeader'
import Footer from './Footer'
import { Outlet } from 'react-router'

function ProfePages() {
    return (
        <>
            <PrivateHeader />
            <NavbarProfe />
            <Outlet />
            <Footer />
        </>
    )
}

export default ProfePages