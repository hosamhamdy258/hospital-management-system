import React,{ useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { getDepartments } from '../store/Departments';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export default function BottomFooter() {
	const dispatch = useDispatch();
  const state = useSelector((state) => state.departmentsSlice);
  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);
	return (
		<footer className="footer section gray-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 mr-auto col-sm-6">
						<div className="widget mb-5 mb-lg-0">
							<div className="logo mb-4">
								<img src="/static/media/logo.549eb94ed21cda0132ae.jpg" alt="logo" className="img-fluid" />
							</div>
							<p>Hope is a graduation project created by "team 3" from Full Stack Python Track.</p>
							<div className="social-icon">
								<a href="https://www.linkedin.com/school/information-technology-institute-iti-/" target="_blank" rel="noreferrer">
									<img src={navIcon1} alt="" />
								</a>
								<a href="https://www.facebook.com/itimenofiabranch/" target="_blank" rel="noreferrer">
									<img src={navIcon2} alt="" />

								</a>

							</div>
						</div>

					</div>

					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="widget mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">Departments</h4>
							<div className="divider mb-4"></div>

							<ul className="list-unstyled footer-menu lh-35">
							{state.departments.map((item) => (
								<li><NavLink to={`/departments/${item.id}`}>{item.name} </NavLink></li>
								))
								}
							</ul>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="widget mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">Support</h4>
							<div className="divider mb-4"></div>

							<ul className="list-unstyled footer-menu lh-35">
								<li>
								<NavLink to="/about">About US</NavLink>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="widget widget-contact mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">Get in Touch</h4>
							<div className="divider mb-4"></div>

							<div className="footer-contact-block mb-4">
								<div className="icon d-flex align-items-center">
									<i className="icofont-email mr-3"></i>
									<span className="h6 mb-0">Support Available for 24/7</span>
								</div>
								<h4 className="mt-2"><a href="mailto:ITIinfo@iti.gov.eg">ITIinfo@iti.gov.eg</a></h4>
							</div>

						</div>
					</div>
				</div>

				<div className="footer-btm py-4 mt-5">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<div className="copyright">
								Copyright © 2022, Designed &amp; Developed by <a href="https://iti.com/">ITIans Teams</a>
							</div>
						</div>
						<div className="col-lg-6">

						</div>
					</div>


				</div>
			</div>
		</footer>
	);
}
