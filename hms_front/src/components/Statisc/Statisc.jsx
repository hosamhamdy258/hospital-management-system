import React from 'react'
import { motion } from "framer-motion"

const Statisc = ({ isVisible }) => {
    return (
        <>
         <section className='Dbg-2'>
        <div className="overlay_s">      
        </div>

            <motion.div className="container" initial={{scale:.7}} whileInView={{scale:1 ,x: [0, -140,0]}} transition={{duration:2}}>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center ">
                        <div className="statistic_block p-4">
                            <div className="text">
                                <strong className="number" >9</strong>
                                <span>Years of Experienced</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ">
                        <div className="statistic_block p-4">
                            <div className="text">
                                <strong className="number">3,600</strong>
                                <span>Happy Patients</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ">
                        <div className="statistic_block p-4">
                            <div className="text">
                                <strong className="number" >54</strong>
                                <span>Number of Doctors</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center ">
                        <div className="statistic_block p-4">
                            <div className="text">
                                <strong className="number" data-number="300">171</strong>
                                <span>Number of Staffs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            </section>

        </>
    )
}

export default Statisc