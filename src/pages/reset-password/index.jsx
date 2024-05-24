import React from 'react'

import Navbar from "../../components/SigninNavbar"
import Reset from '../../components/ResetPassword/Reset'

const index = () => {
    return (
        <div className='container'>
            <Navbar />
            <Reset />
        </div>
    )
}

export default index