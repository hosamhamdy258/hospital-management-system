import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../store/usersSlice';
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function UserResetPass() {
    // const ResetPassword = ({ reset_password }) => {
    // const [requestSent, setRequestSent] = useState(false);
    // const [formData, setFormData] = useState({
    //     email: ''
    // });

    // const { email } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
    //     e.preventDefault();
    //     reset_password(email);
    //     setRequestSent(true);
    // };
    // e => onSubmit(e)

    /////////////////////////////////////////////////////////////////
    const [x, setX] = useState(false);
    const dispatch = useDispatch();
    const email = useRef(null)
    const { requestSent } = useSelector((state) => state.users)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
        };
        dispatch(reset_password(data));
    };


    if (requestSent) {
        setX(true);
        setTimeout(function () {
            window.location.href = '/';
        }, 3000);
    }



    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5 w-100">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-2">
                                                    Forgot Your Password?
                                                </h1>
                                                <p className="mb-4">
                                                    We get it, stuff happens. Just enter your email
                                                    address below and we'll send you a link to reset
                                                    your password!
                                                </p>
                                                {x && <p className="text-danger">confirmation Email has been Sent Redirecting ....</p>}
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        className='form-control form-control-user'
                                                        type='email'
                                                        placeholder='Email'
                                                        name='email'
                                                        // value={email}
                                                        // onChange={e => onChange(e)}
                                                        required
                                                        ref={email}
                                                    />
                                                </div>
                                                <button className='btn btn-primary btn-user btn-block' type='submit'>Reset Password</button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link to="/signup" className="small">Create an Account! </Link>
                                            </div>
                                            <div className="text-center">
                                                <Link to="/login" className="small">Already have an account? Login!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

// export default connect(null, { reset_password })(ResetPassword);
