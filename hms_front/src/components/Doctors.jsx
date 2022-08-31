import "react-multi-carousel/lib/styles.css";

import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-multi-carousel";
import Deptsbackg from "../assets/img/color-sharp.png";
import { getDoctors } from "../store/Doctors";

export default function Doctors() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="doctors" id="doctors">
      <Container>
        <Row>
          <Col>
            <div className="doctors-bx">
              <h2>Meet Our Doctors</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="doctors-slider"
              >
                {state.doctors.map((item) => (
                  <Card
                    key={item.id}
                    className="item"
                    style={{ height: "19rem" }}
                  >
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.full_name}</Card.Title>
                      <NavLink
                        to={`/doctor/${item.id}`}
                        className="btn btn-main-2 btn-round-full btn-primary"
                      >
                        Make an Appointment
                      </NavLink>
                    </Card.Body>
                  </Card>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={Deptsbackg} className="background-image-left" alt="" />
    </section>
    // <div>
    //   Doctors
    //   {state.doctors.map(function (item) {
    //     return <li key={item.id}>{item.name}</li>;
    //   })}
    // </div>
  );
}
