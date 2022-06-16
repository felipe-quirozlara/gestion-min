import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import NavbarAdmin from './NavbarAdmin'
import PrivateHeader from './PrivateHeader'

const AdminPages = () => {
    return (
        <>
            <PrivateHeader />
            <NavbarAdmin />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminPages