import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const WeSummary = () => {
  const { isAuthenticated, user } = useSelector((state) => state.users);

  return (
    <>
      <motion.section className="we_summary p-5" id="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className="we_img w-100 d-flex align-self-stretch align-items-center"
              ></motion.div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 py-md-5">
              <div className="py-md-5">
                <div className="row justify-content-start pb-3">
                  <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="col-md-12 heading-section"
                  >
                    <h2 className="mb-4">
                      We Are <span className="we_summ_span">HOPE</span> A
                      Healthcare Provider
                    </h2>
                    <p>
                      Our mission is to inspire hope and contribute to health
                      and well-being by providing the best care to every patient
                      through integrated clinical practice, education and
                      research. Our primary value is "The needs of the patient
                      come first."
                    </p>
                    <p>
                      {isAuthenticated && !user.profile_complete && (
                        <Link
                          to="/completedata"
                          className="home_we_make btn btn-primary m-1 py-3 px-4"
                        >
                          Make an appointment
                        </Link>
                      )}
                      {isAuthenticated && user.profile_complete && (
                        <Link
                          to="/patient"
                          className="home_we_make btn btn-primary m-1 py-3 px-4"
                        >
                          Make an appointment
                        </Link>
                      )}
                      {!isAuthenticated && (
                        <Link
                        to="/login"
                          className="home_we_make btn btn-primary m-1 py-3 px-4"
                        >
                          Make an appointment
                        </Link>
                      )}
                      {/* Modify redirect */}
                      <NavLink
                        to="/contact"
                        className="home_we_make btn btn-success m-1 py-3 px-4"
                      >
                        Contact Us
                      </NavLink>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default WeSummary;
