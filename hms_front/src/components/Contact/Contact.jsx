import React , {useRef, useState} from 'react'

import PageHead from '../PagesHeading/PageHead'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [result,setResult]=useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tfaim8c', 'template_mxekqii', form.current, 'sPzuh52O8EZDH-9Ws')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        setResult(true);
      };
    return (
        <>
            <PageHead title='Contact Us' />
            <section className="section contact-info pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i  className="fa-solid fa-headset"></i>                                <h5>Call Us</h5>
                                +0109-072-0800
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i  className="fa-solid fa-envelope"></i>                              <h5>Email Us</h5>
                                ITIinfo@iti.gov.eg
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i  className="fa-solid fa-location-dot"></i>
                                <h5>Location</h5>
                                Menofia Governorate , Shebin El Koum
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="contact-form section">
                <div  className="container">
                    <div  className="row justify-content-center">
                        <div  className="col-lg-6">
                            <div  className="section-title text-center">
                                <h2  className="text-md mb-2">Contact us</h2>
                                <div  className="divider mx-auto my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div  className="row">
                        <div  className="col-lg-12 col-md-12 col-sm-12">
                            <form ref={form} id="contact-form"  className="contact_form " onSubmit={sendEmail}>
                              
                                <div  className="row">
                                    <div  className="col-lg-6">
                                        <div  className=" form_group">
                                            <input name="fullName" id="name" type="text"  className="form_control" placeholder="Your Full Name" required/>
                                        </div>
                                    </div>

                                    <div  className="col-lg-6">
                                        <div  className=" form_group">
                                            <input name="email" id="email" type="email"  className="form_control" placeholder="Your Email Address" required/>
                                        </div>
                                    </div>
                                    <div  className="col-lg-6">
                                        <div  className=" form_group">
                                            <input name="subject" id="subject" type="text"  className="form_control" placeholder="Message Title" required/>
                                        </div>
                                    </div>
                                    <div  className="col-lg-6">
                                        <div  className=" form_group">
                                            <input name="phone" id="phone" type="text"  className="form_control" placeholder="Your Phone Number" required/>
                                        </div>
                                    </div>
                                </div>

                                <div  className=" form_group-2 mb-4">
                                    <textarea name="message" id="message"  className="form_control" rows="8" placeholder="Your Message" required=""></textarea>
                                </div>

                                <div>
                                    <input  className="btn send_btn btn-round-full" name="submit" type="submit" value="Send Messege"/>
                                </div>
                               {
                                result? <div  className="row">
                                <div  className="col-6">
                                    <div  className="mt-3 alert alert-success contact__msg" role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>:null
                               }

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact