import { useParams } from "react-router-dom";

import React from "react";
import { doctorNames } from "../../myData";

const DoctorPage = () => {
  let { id } = useParams();
  const doctorData = doctorNames.find((x) => x.id === id);
  console.log(doctorData);
  return (
    <>
      <section className="Dbg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <span className="text-white">Doctor Details</span>
                <h1 className="text-capitalize mb-5 text-lg">
                  {doctorData.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section doctorInfo">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="doctorImg">
                <img src={doctorData.img} alt="" />
                <div className="info mt-4">
                  <h4 className="mb-0">{doctorData.title}</h4>
                  <p>Orthopedic Surgary</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="doctor-details mt-4 mt-lg-0">
                <h2 className="text-md">Introducing myself</h2>
                <div className="divider my-4"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  tempore cumque voluptate beatae quis inventore sapiente nemo,
                  a eligendi nostrum expedita veritatis neque incidunt ipsa
                  doloribus provident ex, at ullam. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Ipsam, perferendis officiis esse
                  quae, nobis eius explicabo quidem? Officia accusamus
                  repudiandae ea esse non reiciendis accusantium voluptates,
                  facilis enim, corrupti eligendi?
                </p>
                <a href="" className="btnMain btn btn-round-full mt-3">
                  Make an Appoinment
                  <i className="icofont-simple-right ml-2  "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;
