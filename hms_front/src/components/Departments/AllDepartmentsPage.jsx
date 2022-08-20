import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import PageHead from '../PagesHeading/PageHead'
import { getDepartments } from '../../store/Departments';

const AllDepartmentsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.departmentsSlice);
  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);
  return (
    <>
      <PageHead title='All Departments' />
      <section className='section service'>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Award Winning Patient Care</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {state.departments.map((item) => (

              <div className="col-lg-4 col-md-6 d-flex justify-content-between" key={item.id}>
                <Card >
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.desc.split('.')[0].replace(/[^a-zA-Z0-9]/g, '')}
                    </Card.Text>
                    <button>
                      <Link className="dep_link" to={`/departments/${item.id}`} d_id={item.id}>
                        read more<i className="fa fa-arrow-right px-2" aria-hidden="true"></i>
                      </Link>
                    </button>
                    <br />
                  </Card.Body>
                </Card>
              </div>
            ))}

          </div>
          {/* <div className="row tabulation mt-4">
            <div className="col-md-3">
              <ul className="nav nav-pills nav-fill d-block w-100">
                <li className="nav-item text-left">
                  <a className="nav-link d-flex align-items-centere py-4 " data-toggle="tab" href="#services-1"><span class="flaticon-health flaticon mr-3"></span> <span>Neurology</span></a>
                </li>
                <li className="nav-item text-left">
                  <a className="nav-link py-4 d-flex align-items-center" data-toggle="tab" href="#services-2">
                  <i class="fa-solid fa-house-medical"></i>                                                    <span>Ophthalmology</span></a>
                </li>
              </ul>
            </div>
            <div className="col-md-9"></div>
          </div> */}
        </div>
      </section>

    </>
  )
}

export default AllDepartmentsPage