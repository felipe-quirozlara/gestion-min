import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import PrivateHeader from './PrivateHeader'
import Navbar from './Navbar'

const PrivatePages = () => {
    return (
        <>
            <PrivateHeader />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PrivatePages