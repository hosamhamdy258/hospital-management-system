import { Card } from 'react-bootstrap'
import PageHead from '../PagesHeading/PageHead'
import React from 'react'

const About = () => {
    return (
        <>
            <PageHead title='About Us' />
            <section className="section about-page">
                <div className="container">
                    <div className="row">
                        <h2 className="about_title">Personal care for your healthy living</h2>
                    </div>
                    <div className="divider mt-4 mb-5 mb-lg-0"></div>

                </div>
            </section>
            <div className="img_hero">
                <div>
                    <section className='img_present'>
                        <div>
                            <img src="/features/h1.jpg" alt="" className="img-fluid shadow-4" />
                            <div>
                                <div class="c-paragraph"><p>Our mission is to improve people's lives and bring back smiles.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className='features'>
                <div className="container">
                    <div className="row">
                        <h2 className="about_title">Our Services</h2>

                        <div className="col-lg-3 col-md-6 d-flex justify-content-between">
                            <Card >
                                <Card.Img variant="top" src="/features/doctors.jpg" />
                                <Card.Body>
                                    <Card.Title>Qualified Doctors</Card.Title>
                                    <Card.Text>
                                    </Card.Text>

                                    <br />
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-between">
                            <Card >
                                <Card.Img variant="top" src="/features/donationbox1.jpg" />
                                <Card.Body>
                                    <Card.Title>Modern Equipments</Card.Title>
                                    <Card.Text>
                                    </Card.Text>

                                    <br />
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-between">
                            <Card >
                                <Card.Img variant="top" src="/features/medical-counseling.jpg" />
                                <Card.Body>
                                    <Card.Title>Medical Counseling</Card.Title>
                                    <Card.Text>
                                    </Card.Text>

                                    <br />
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-between">
                            <Card >
                                <Card.Img variant="top" src="/features/Children-Healthcare-1920x1080-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Healthcare for Kids</Card.Title>
                                    <Card.Text>
                                    </Card.Text>

                                    <br />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </section>
            <section className="section awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="title-color">Our Doctors achievements </h2>
                            <div className="divider mt-4 mb-5 mb-lg-0"></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award_img">
                                        <img src="/features/f_3.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award_img">
                                        <img src="/features/f_1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award_img">
                                        <img src="/features/f_2.png" alt="hhh" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default About