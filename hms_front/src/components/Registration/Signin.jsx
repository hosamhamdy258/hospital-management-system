import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import { useRef } from 'react';
import { Signin } from '../../store/usersSlice';
import { Link, Navigate } from 'react-router-dom';

export default function UserLog() {
    const { err, isAuthenticated } = useSelector((state) => state.users);
    const email = useRef(null);
    const password = useRef(null);


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email.current.value,
            password: password.current.value,
        }
        dispatch(Signin(data));
    }


    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <>
            <div className='container mt-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        {err && <p className="text-danger mt-1">{err}</p>}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={email} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={password} />
                    </Form.Group>
                    <div className="text-end mb-3">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <p className='mt-3'>
                    Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
                </p>
            </div>
        </>
    )
}




    // const { erorr } = useSelector((state) => state.users);

    // function erorrMsg(myObject) {
    //     for (var key in myObject) {
    //         if (myObject.hasOwnProperty(key)) {
    //             return (myObject[key]);
    //         }
    //     }
    // }
