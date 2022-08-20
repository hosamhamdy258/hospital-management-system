import { getDoctors } from "./../store/Doctors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Completedata = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
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
          <form action="" method="post" className="form">
            <div className="row mx-1 mb-2 text-center justify-content-center">
              <label type="text" className="col-md-5 mx-2 mb-2">
                Enter your birthdate
              </label>
              <input type="date" className="col-md-5 mb-2" />
              <input
                type="text"
                placeholder="Enter National id"
                className="col-md-5 mx-2 mb-2"
              />
              <input
                type="text"
                placeholder="Enter first name"
                className="col-md-5 mb-2"
              />
              <input
                type="text"
                placeholder="Enter middle name"
                className="col-md-5 mx-2 mb-2"
              />
              <input
                type="text"
                placeholder="Enter last name"
                className="col-md-5 mb-2"
              />
              <input
                type="text"
                placeholder="Enter your Address"
                className="col-md-5 mx-2 mb-2"
              />
              <select
                type="date"
                className="col-md-5 mb-2"
                placeholder="select a doctor"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {state.is_doctor ? (
                <>
                  <select
                    type="date"
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
              ) : (
                <></>
              )}
              {state.is_patient ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter drugs taken"
                    className="col-md-5 mx-2 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter your comments"
                    className="col-md-5 mb-2"
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            <hr />
            <div className="row g-3 mb-1 mt-1">
              <div className="col-12 mt-1 text-center">
                <button
                  type="submit"
                  className="btn btn-secondary mx-3"
                  //   disabled={state.reservationData.isDisabled}
                >
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
