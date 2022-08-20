import React from 'react'
import { Link } from 'react-router-dom'

export default function Verified() {
    return (
        <div className="container text-center my-5">
            <h1 className="text-info mb-5">Congratulations Your Account has been Activated Successfully</h1>
            <Link className='nav_login_button' to='/'> Go To Websit </Link>
        </div>
    )
}
