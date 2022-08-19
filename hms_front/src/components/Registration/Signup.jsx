import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Signup } from "../../store/usersSlice";
// import { useSelector } from "react-redux";

export default function AddUser() {
  const { erorr } = useSelector((state) => state.users);
  const first_name = useRef(null);
  const last_name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const re_password = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
      password: password.current.value,
      re_password: re_password.current.value,
    };
    dispatch(Signup(data));
    first_name.current.value = null;
    last_name.current.value = null;
    email.current.value = null;
    password.current.value = null;
    re_password.current.value = null;
  };

  function erorrMsg(myObject) {
    for (var key in myObject) {
      if (myObject.hasOwnProperty(key)) {
        return myObject[key];
      }
    }
  }

  return (
    <>
      <div className="container text-start w-50 my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              ref={first_name}
            />
            <p className="text-danger">
              {erorr && erorr.hasOwnProperty("first_name") && erorrMsg(erorr)}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" ref={last_name} />
            <p className="text-danger">
              {erorr && erorr.hasOwnProperty("last_name") && erorrMsg(erorr)}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email} />
            <p className="text-danger">
              {erorr && erorr.hasOwnProperty("email") && erorrMsg(erorr)}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
            />
            <p className="text-danger">
              {erorr && erorr.hasOwnProperty("password") && erorrMsg(erorr)}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              ref={re_password}
            />
            <p className="text-danger">
              {erorr && erorr.hasOwnProperty("re_password") && erorrMsg(erorr)}
            </p>
          </Form.Group>
          <div className="text-end mb-3">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
