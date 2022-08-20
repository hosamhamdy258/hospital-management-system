import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHead from '../PagesHeading/PageHead'
import { getDoctors } from '../../store/Doctors';

const AllDoctors = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.doctorsSlice);


    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);
    return (

        <>
            <PageHead title='Qualified Doctors' />
            <section className='section service'>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Doctors</h2>
                                <div className="divider mx-auto my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {state.doctors.map((item) => (

                            <div key={item.id} className="col-lg-4 col-md-6">

                                <div className="staff mb-5">
                                    <div className="img-wrap d-flex align-items-stretch">
                                        <div className="img align-self-stretch">
                                            <img src="https://preview.colorlib.com/theme/medex/images/xdoc-3.jpg.pagespeed.ic.ssPmw2cMao.webp" alt="doctor_img" className='img-fluid w-100' />
                                        </div>
                                    </div>
                                    <div className="text text-center">
                                        <h4 className='mt-4 mb-2 title-color'>{item.full_name}</h4>
                                        <p className='depName mb-4'>{item.department}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default AllDoctors