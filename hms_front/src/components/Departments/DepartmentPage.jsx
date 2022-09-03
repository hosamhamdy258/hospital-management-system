import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHead from "../PagesHeading/PageHead";
import { getDepartmentDetails } from "../../store/Departments";

const DepartmentPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.departmentsSlice);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    dispatch(getDepartmentDetails(id));
  }, [id]);
  console.log(state.departmentDetails);
  const myDep = state.departmentDetails;
  return (
    <div>
      <PageHead title={myDep.name} />
      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="department-img">
                <img
                  src={myDep.img}
                  alt=""
                  className="img-fluid singleDepImg"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="department-content mt-5">
                <h2 className="text-md">{myDep.name}</h2>
                <div className="divider my-4"></div>
                <p className="desContent">{myDep.desc}</p>
                <h3 className="mt-5 mb-4">Services features</h3>
                <div className="divider my-4"></div>
                <ul className="list-unstyled department-service">
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>blood
                    services
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>
                    emergency room services
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>
                    general and specialty surgical services
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>x
                    ray/radiology services
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>
                    Critical Care Medicine Specialists
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-danger mx-2"></i>
                    laboratory services
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget schedule-widget mt-5">
                <h5 className="mb-4">Time Schedule</h5>
                <div className="divider my-4"></div>

                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center">
                    <span>
                      {myDep.startDay ? myDep.startDay.toUpperCase() : null} -{" "}
                      {myDep.endDay ? myDep.endDay.toUpperCase() : null}
                    </span>
                    {/* <span>{myDep.startDay} - {myDep.endDay}</span> */}

                    {/* <span>{myDep.startTime_Schedule.slice(0,5)} - {myDep.endTime_Schedule.slice(0,5)}</span> */}
                    <span>
                      {myDep.startTime_Schedule
                        ? myDep.startTime_Schedule.slice(0, 5)
                        : null}{" "}
                      -{" "}
                      {myDep.endTime_Schedule
                        ? myDep.endTime_Schedule.slice(0, 5)
                        : null}
                    </span>
                  </li>
                </ul>

                <div className="sidebar-contatct-info mt-4">
                  <p className="mb-0">Need Urgent Help?</p>
                  <h3>+0109-072-0800</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentPage;
