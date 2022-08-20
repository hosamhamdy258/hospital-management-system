import { getDoctors } from "./../store/Doctors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { postProfile } from "./../store/Profile";

const Completedata = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profileSlice);
  const id_number = useRef(null);
  const first_name = useRef(null);
  const last_name = useRef(null);
  const address = useRef(null);
  const birth_date = useRef(null);
  const gender = useRef(null);
  const durgs = useRef(null);
  const comment = useRef(null);
  const departments = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      id_number: id_number.current.value,
      address: address.current.value,
      birth_date: birth_date.current.value,
      gender: gender.current.value,
    };
    if (!state.is_doctor && !state.is_emp && !state.is_superuser) {
      data["durgs"] = durgs.current.value;
      data["comment"] = comment.current.value;
    }
    console.log(data);

    dispatch(postProfile(data));
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-center p-3">
        <h1 className="h4  text-gray-800">
          Welcome, Please complete your data.
        </h1>
      </div>

      <div className="row mb-4 justify-content-center">
        <div className="col-lg-8 col-md-6 border p-4 shadow bg-light">
          <div className="col-12">
            <h4 className="m-0 font-weight-bold text-dark">
              Personal info form
            </h4>
            <hr />
          </div>
          <form
            action=""
            method="post"
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="row mx-1 mb-2 text-center justify-content-center">
              <label type="text" className="col-md-5 mx-2 mb-2">
                Enter your birthdate
              </label>
              <input
                ref={birth_date}
                type="date"
                className="col-md-5 mb-2"
                required
              />
              <input
                ref={id_number}
                required
                type="text"
                placeholder="Enter National id"
                className="col-md-5 mx-2 mb-2"
              />
              <input
                required
                type="text"
                placeholder="Enter first name"
                className="col-md-5 mb-2"
                ref={first_name}
              />
              <input
                type="text"
                placeholder="Enter middle name"
                className="col-md-5 mx-2 mb-2"
              />
              <input
                required
                type="text"
                placeholder="Enter last name"
                className="col-md-5 mb-2"
                ref={last_name}
              />
              <input
                required
                type="text"
                placeholder="Enter your Address"
                className="col-md-5 mx-2 mb-2"
                ref={address}
              />
              <select
                required
                ref={gender}
                name="gender"
                className="col-md-5 mb-2"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {state.is_doctor ? (
                <>
                  <select
                    ref={departments}
                    required
                    className="col-md-5 mb-2"
                    placeholder="select a doctor"
                  >
                    <option value="">Select your department</option>
                    <option value="ortho">ortho</option>
                    <option value="cardio">cardio</option>
                  </select>
                  <input
                    type="file"
                    id="exampleFormControlFile1"
                    placeholder="Enter middle name"
                    className="col-md-5 mb-2"
                  />
                </>
              ) : null}
              {state.is_doctor && state.is_emp && state.is_superuser ? null : (
                <>
                  <input
                    type="text"
                    ref={durgs}
                    placeholder="Enter drugs taken"
                    className="col-md-5 mx-2 mb-2"
                  />
                  <input
                    type="text"
                    ref={comment}
                    placeholder="Enter your comments"
                    className="col-md-5 mb-2"
                  />
                </>
              )}
            </div>
            <hr />
            <div className="row g-3 mb-1 mt-1">
              <div className="col-12 mt-1 text-center">
                <button type="submit" className="btn btn-secondary mx-3">
                  Submit Data
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary  me-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Completedata;
