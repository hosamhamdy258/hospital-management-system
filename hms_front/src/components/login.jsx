import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "./../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login({state}) {
  // const state = useSelector((state) => state.authSlice);

  const username = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username.current.value,
      password: password.current.value,
    };
    // console.log(data);
    dispatch(loginUser(data));
    // console.log(data);
    username.current.value = null;
    password.current.value = null;
  };

  return (
    <Form className="container w-50" method="POST" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          required
          type="text"
          ref={username}
          placeholder="Enter user name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          ref={password}
          placeholder="Password"
        />
        {state.detail ? <h3>{state.detail}</h3> : null}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
