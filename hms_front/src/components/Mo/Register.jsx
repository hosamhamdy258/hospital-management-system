import '../style/moStyle.css'

import React from "react";

const Register = () => {
  return (
    <>
      <body className="bg-gradient-light">
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
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
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Repeat Password"
                          />
                        </div>
                      </div>
                      <a
                        href="login.html"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Register Account
                      </a>
                      <hr />
                    </form>

                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="login.html">
                        Already have an account? Login!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;