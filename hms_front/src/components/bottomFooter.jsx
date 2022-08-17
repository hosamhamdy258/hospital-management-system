import React from "react";

export default function BottomFooter() {
  return (
//     <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//         <div className="row">
//             <div className="col-md-6 mt-md-0 mt-3">
//                 <h5 className="text-uppercase">Footer Content</h5>
//                 <p>Here you can use rows and columns to organize your footer content.</p>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0"/>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//     <div className="footer-copyright text-center py-3">© 2022 Copyright:
//         <a href="#"> HOPE.com</a>
//     </div>

// </footer>
<footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
                        <img src="/static/media/logo.549eb94ed21cda0132ae.jpg" alt="logo" className="img-fluid"/>	
                    </div>
					<p>Hope is a graduation project created by "team 3" from Full Stack Python Track.</p>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Department</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="#!">Surgery </a></li>
						<li><a href="#!">Wome's Health</a></li>
						<li><a href="#!">Radiology</a></li>
						<li><a href="#!">Cardioc</a></li>
						<li><a href="#!">Medicine</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">Support</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="#!">FAQuestions</a></li>
						<li><a href="#!">About Us</a></li>
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
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							<input type="text" className="form-control" placeholder="Your Email address" required=""/>
							<button type="submit" className="btn btn-main-2 btn-round-full">Subscribe</button>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<a className="backtop scroll-top-to reveal" href="#top">
						<i className="icofont-long-arrow-up"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
  );
}
