import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react'
import Row from 'react-bootstrap/Row';
import { doctorNames } from '../../myData'

const Appoinment = () => {
    let { id } = useParams();
    const doctorData = doctorNames.find(x => x.id == 1);
    console.log(doctorData)
    return (
        <>
            <section className='Dbg-1'>
                <div className="overlay">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <span className="text-white">
                                    Book your Seat
                                </span>
                                <h1 className='text-capitalize mb-5 text-lg'>
                                    Appoinment
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section doctorInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="doctorImg">
                                <img src={doctorData.img} alt="" />
                                <div className="info mt-4">
                                    <h4 className='mb-0'>{doctorData.title}</h4>
                                    <p>Orthopedic Surgary</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 ">
                            <h1 style={{ color: 'black', marginBottom: '20px' }}>Book an appoinment</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Patient Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" className="form-control"/>
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" placeholder="Patient Age" className="form-control"/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridFName">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Phone Number" className="form-control"/>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Pick a date</Form.Label>
                                        <Form.Control type="date" placeholder="Phone Number" className="form-control" />

                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Pick a time</Form.Label>
                                        <Form.Select defaultValue="Choose..." className="form-control">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                        
                                </Row>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Appoinment