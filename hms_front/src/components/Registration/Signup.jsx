import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Signup } from "../../store/usersSlice";
import { Link, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function AddUser() {
  const { err, registered } = useSelector((state) => state.users);
  if (err && err.non_field_errors) {
    console.log(err.non_field_errors[0])
  }
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
    // first_name.current.value = null;
    // last_name.current.value = null;
    // email.current.value = null;
    // password.current.value = null;
    // re_password.current.value = null;
  };

  function erorrMsg(myObject) {
    for (var key in myObject) {
      if (myObject.hasOwnProperty(key)) {
        return myObject[key];
      }
    }
  }

  if (registered) {
    return <Navigate to='/reqActivate' />
  }
  return (
    <>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5 w-100">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                          ref={first_name}
                        />
                        <p className="text-danger">
                          {err && err.hasOwnProperty("first_name") && erorrMsg(err)}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                          ref={last_name}
                        />
                        <p className="text-danger">
                          {err && err.hasOwnProperty("last_name") && erorrMsg(err)}
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        ref={email}
                      />
                      <p className="text-danger">
                        {err && err.hasOwnProperty("email") && erorrMsg(err)}
                      </p>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          ref={password}
                        />
                        <p className="text-danger">
                          {err && err.hasOwnProperty("password") && erorrMsg(err)}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          ref={re_password}
                        />
                        <p className="text-danger">
                          {err && err.non_field_errors && err.non_field_errors[0]}
                        </p>
                      </div>
                    </div>
                    <Button type="submit" className="btn btn-primary btn-user btn-block">
                      Register Account
                    </Button>
                    <hr />
                  </form>
                  <div className="text-center">
                    <p>
                      <Link to="/reset-password" className="small">Forgot Password? </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <p>
                      <Link to="/login" className="small">Already have an account? Login! </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
