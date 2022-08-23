import 'react-multi-carousel/lib/styles.css'

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import Deptsbackg from '../../assets/img/color-sharp.png'
import React from 'react'
import {doctorNames} from '../../myData'

const Doctors = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1124, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
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
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
  return (
    <section className='doctors' id='doctors'>
        <Container>
            {/* <Row>
                    <div className="doctors-bx">
                    <h2>Meet Our Doctors</h2>
                    <Carousel responsive={responsive} infinite={true} className='doctors-slider'>
                    {doctorNames.map((val) => (
                       <Card className='item'>
                       <Card.Img className='home_doc_img' variant="top" src={val.img} />
                       <Card.Body>
                         <Card.Title>{val.title}</Card.Title>
                         <NavLink to={`/doctor/${val.id}`} className="btn btn-main-2 btn-round-full btn-primary">Make an Appointment</NavLink>

                       </Card.Body>
                     </Card>      
              ))}
                    </Carousel>
                    </div>
            </Row> */}
            <div className="multi-carousel" id="carousel">
        <div className="multi-carousel-inner">
          
          
          
          <div className="multi-carousel-item" style="width: 100%;">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp" alt="Place Royale Bruxelles" className="w-100"/>
          </div>
        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" alt="Table Full of Spices" className="w-100"/>
          </div><div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp" alt="Winter Landscape" className="w-100"/>
          </div><div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp" alt="View of the City in the Mountains" className="w-100"/>
          </div></div>
        <button className="carousel-control-prev" type="button" tabindex="0" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" tabindex="0" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
        </Container>
        <img src={Deptsbackg} className='background-image-left' />
    </section>

  )
}

export default Doctors