import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registerUser } from "./../store/authSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const username = useRef(null);
  const email = useRef(null);
  const password1 = useRef(null);
  const password2 = useRef(null);
  const dispatch = useDispatch();

  const [errorMSG, seterrorMSG] = useState("");
  const [disabled, setdisabled] = useState(true);
  const handleChange = (e) => {
    if (
      (password1.current.value !== password2.current.value) &
      (password2.current.value.length > 0)
    ) {
      seterrorMSG("passwords must match");
      setdisabled(true);
    } else {
      seterrorMSG("");
      setdisabled(false);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     username: username.current.value,
  //     email: email.current.value,
  //     password: password1.current.value,
  //   };
  //   console.log(data);
  //   // dispatch(registerUser(data));
  //   // console.log(data);
  //   username.current.value = null;
  //   email.current.value = null;
  //   password1.current.value = null;
  //   password2.current.value = null;
  // };

  const handleSubmit = (event) => {
    console.log("in2");
    event.preventDefault();
    const data = {
      username: username.current.value,
      email: email.current.value,
      password: password1.current.value,
    };
    console.log(data);
    dispatch(registerUser(data));
    // console.log(data);

    console.log("out");
  };
  return (
    <Form
      className="container w-50"
      method="POST"
      // validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          required
          type="text"
          ref={username}
          placeholder="Enter user name"
        />
        <Form.Control.Feedback type="invalid">
          Required Field .
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          ref={email}
          placeholder="Enter Email Address"
        />

        <Form.Control.Feedback type="invalid">
          Required Field and must be valid Email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          ref={password1}
          placeholder="Password"
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Required Field
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control
          required
          type="password"
          ref={password2}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Required Field
        </Form.Control.Feedback>
      </Form.Group>
      {errorMSG ? <h5>{errorMSG}</h5> : null}

      <Button variant="primary" type="submit" disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
}

// function FormExample() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }
