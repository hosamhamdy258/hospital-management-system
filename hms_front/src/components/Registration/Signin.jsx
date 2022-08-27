import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { checkAuthenticated, load_user, Signin } from "../../store/usersSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function UserLog() {
  const { signerr, isAuthenticated } = useSelector((state) => state.users);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(Signin(data));
  };

  // if (isAuthenticated) {
  //   return <Navigate to="/" />;
  // }
  useEffect(() => {
    // dispatch(checkAuthenticated());
    // dispatch(load_user());
    if (isAuthenticated) {
      dispatch(checkAuthenticated());
      dispatch(load_user());
      navigateMSG();
    }
  }, [isAuthenticated]);

  const navigate = useNavigate();

  const navigateMSG = () => {
    try {
      navigate("/home");
    } catch (error) {}
  };

  return (
    <>
      <div className="container m-5 mx-auto">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5 w-100">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        {signerr && (
                          <div>
                            <p className="text-danger">{signerr.detail}</p>
                            <p className="text-danger">{signerr}</p>
                          </div>
                        )}
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            ref={email}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            ref={password}
                          />
                        </div>
                        <Button
                          className="btn btn-primary btn-user btn-block"
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <p>
                          <Link to="/reset-password" className="small">
                            Forgot Password?{" "}
                          </Link>
                        </p>
                      </div>
                      <div className="text-center">
                        <p>
                          <Link to="/signup" className="small">
                            Create an Account!{" "}
                          </Link>
                        </p>
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
}
