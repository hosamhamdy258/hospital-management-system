import React from 'react'
import { motion } from "framer-motion"

const WeSummary = () => {
    return (
        <>
            <motion.section className="we_summary p-5" id="about-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <motion.div initial={{y:100}} whileInView={{y:0 }} transition={{duration:1.5}} className="we_img w-100 d-flex align-self-stretch align-items-center" >
                            </motion.div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-lg-5 py-md-5">
                            <div className="py-md-5">
                                <div className="row justify-content-start pb-3">
                                    <motion.div initial={{y:100}} whileInView={{y:0 }} transition={{duration:1.5}} className="col-md-12 heading-section">
                                        <h2 className="mb-4">We Are <span className='we_summ_span'>HOPE</span> A Healthcare Provider</h2>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Make an appointment</a> <a href="#" className="btn btn-success py-3 px-4">Contact us</a></p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default WeSummary