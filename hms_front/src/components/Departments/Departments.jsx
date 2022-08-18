import { Button, Card, Col, Container, Row, Tab } from 'react-bootstrap';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DepartmentCard from './DepartmentCard';
import {Depts} from '../../myData'
import Nav from 'react-bootstrap/Nav'
import colorSh2 from '../../assets/img/color-sharp2.png'
import { getDepartments } from '../../store/Departments';

const Departments = () => {
 
    const dispatch = useDispatch();
    const state = useSelector((state) => state.departmentsSlice);
  
    
  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);
  const firstSlicedArray = state.departments.slice(0, 3);
  const secondSlicedArray = state.departments.slice(3);

//   console.log(state.departments)

  return (
    <section className='hDepts' id='hDepts'>
        <Container>
            <Row>
                <Col>
                <h2>Hospital Departments</h2>
                <Tab.Container id='hDepts-tabs' defaultActiveKey='first'>
                <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                    <Nav.Item>
                        <Nav.Link eventKey='first'>
                            First Tab
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='second'>Second Tab</Nav.Link>
                    </Nav.Item>
                  
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row>
                           {
                            firstSlicedArray.map((dept,index)=>{
                            return(
                                <DepartmentCard 
                                key={index}
                                {...dept}/>
                            )
                           })}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                        <Row>
                           {
                            secondSlicedArray.map((dept,index)=>{
                            return(
                                <DepartmentCard 
                                key={index}
                                {...dept}/>
                            )
                           })}
                        </Row>
                    </Tab.Pane>
                    
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSh2} className='background-image-right' alt="" />
    </section>
  )
}

export default Departments