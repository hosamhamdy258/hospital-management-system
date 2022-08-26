import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-bootstrap";
import PageHead from "../PagesHeading/PageHead";
import { getDoctors } from "../../store/Doctors";
import { useState } from "react";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  return (
    <>
      <PageHead title="Qualified Doctors" />

      <section className="section service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Doctors</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="container mb-4 text-center">
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  id="search"
                  ref={inputRef}
                  type="text"
                  className="form-control bg-gradient-light border-0 small"
                  placeholder="Enter Doctor name"
                  aria-label="Search Doctor"
                  aria-describedby="basic-addon2"
                //   onChange={(e) => (e.target.value) ? setName(e.target.value) : setName('')}
                />
                <button
                  onClick={(e) =>
                    inputRef.current.value
                      ? setName(inputRef.current.value)
                      : setName("")
                  }
                  className="btn btn-primary"
                  type="button"
                >
                  <i className="fas fa-arrow-right fa-sm"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="Container">
            <MDBRow>
              {state.doctors
                .filter((item) => item.full_name.toLowerCase().includes(name))
                .map((item) => (
                  <MDBCol lg="4" md="5" sm="6" key={item.id}>
                    <MDBCard className="doctorsCards">
                      <MDBCardImage src={item.img} alt="..." position="top" />
                      <MDBCardBody>
                        <h2>
                          {item.full_name.charAt(0).toUpperCase() +
                            item.full_name.slice(1)}
                        </h2>
                        <h5>
                          Department:{" "}
                          <span className="doctorDepName">
                            {item.department_name}
                          </span>
                        </h5>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
            </MDBRow>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllDoctors;
