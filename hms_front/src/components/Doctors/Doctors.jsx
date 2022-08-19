import 'react-multi-carousel/lib/styles.css'

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import Deptsbackg from '../../assets/img/color-sharp.png'
import React from 'react'
import {doctorNames} from '../../myData'

const Doctors = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <section className='doctors' id='doctors'>
        <Container>
            <Row>
                <Col>
                    <div className="doctors-bx">
                    <h2>Meet Our Doctors</h2>
                    <Carousel responsive={responsive} infinite={true} className='doctors-slider'>
                    {doctorNames.map((val) => (
                       <Card className='item' style={{ width: '16rem' , height:'19rem' }}>
                       <Card.Img className='home_doc_img' variant="top" src={val.img} />
                       <Card.Body>
                         <Card.Title>{val.title}</Card.Title>
                         <NavLink to={`/doctor/${val.id}`} className="btn btn-main-2 btn-round-full btn-primary">Make an Appointment</NavLink>

                       </Card.Body>
                     </Card>      
              ))}
                    </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={Deptsbackg} className='background-image-left' />
    </section>

  )
}

export default Doctors