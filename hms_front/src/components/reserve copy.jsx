// import React, { useEffect, useRef } from "react";
// import Select from "react-select";
// import { useDispatch, useSelector } from "react-redux";
// import { getPatientDoctors, makeReservation } from "./../store/reserve";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import moment from "moment";
// // let data = { doctor: "", patient: "", date: "" };

// export default function Reserve() {
//   const state = useSelector((state) => state.reservationSlice);
//   const [timelist2, settimelist2] = useState([]);
//   const [isValid, setisValid] = useState(false);
//   const [data, setdata] = useState({ doctor: "", patient: "", date: "" });

//   console.log(isValid);
//   let hour;
//   let day;
//   let timelist = [];
//   // let timelist2 = [];
//   let datelist = [];
//   let datelist2 = [];
//   // if (clear) {
//   //   data = { doctor: "", patient: "", date: "" };
//   // }

//   for (let hours = 10; hours < 18; hours++) {
//     hour = moment({ hours });
//     timelist.push({ value: hour.format("H:mm Z"), label: hour.format("H:mm") });
//     hour = moment({
//       hours,
//       minute: 30,
//     });

//     timelist.push({ value: hour.format("H:mm Z"), label: hour.format("H:mm") });
//   }
//   for (let days = 0; days < 14; days++) {
//     day = moment().add({ days });
//     datelist.push({
//       value: day.format("YYYY-MM-DD"),
//       label: day.format("dddd YYYY-MM-DD"),
//     });
//   }

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPatientDoctors());
//   }, [dispatch]);
//   function doctorSelection() {
//     const doctorOptions = state.doctors.map(function (item) {
//       return { value: item.id, label: item.full_name };
//     });

//     return doctorOptions;
//   }

//   function patientSelection() {
//     const patientOptions = state.patients.map(function (item) {
//       return { value: item.id, label: item.full_name };
//     });

//     return patientOptions;
//   }

//   // console.log(timelist);

//   function changemenu() {
//     if (data.doctor && data.date1) {
//       const selectedDoctor = state.reservation.filter((element) =>
//         element.doctor === data.doctor ? element : null
//       );
//       // console.log(selectedDoctor[0].date.slice(0, 10));
//       // console.log(data.date1);
//       const selectedDate = selectedDoctor.filter((element) =>
//         element.date.slice(0, 10) === data.date1 ? element : null
//       );
//       console.log(selectedDoctor);
//       console.log(selectedDate);

//       const reservedTime = [];
//       selectedDate.forEach((element) => {
//         reservedTime.push(element.date.slice(11, 16));
//       });
//       console.log(reservedTime);

//       settimelist2(
//         timelist.filter((element) => {
//           return !reservedTime.includes(element.label);
//         })
//       );
//       console.log(timelist2);
//     }
//   }
//   console.log(timelist2);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(isValid);
//     console.log(data);

//     dispatch(makeReservation(data));
//   };

//   const onChange = (e, str) => {
//     // data[str] = e.value;
//     setdata({ ...data, [`${str}`]: e.value });

//     if (data["date1"] && data["time"]) {
//       data["date"] = data["date1"] + " " + data["time"];
//       setdata({ ...data, date: data["date1"] + " " + data["time"] });
//     }

//     changemenu();
//     console.log(data);
//     setisValid(Object.values(data).every((element) => element));
//   };

//   return (
//     <div>
//       <form action="" method="post" onSubmit={handleSubmit}>
//         <Select
//           placeholder="select a doctor"
//           className="w-25 m-auto"
//           options={doctorSelection()}
//           onChange={(e) => onChange(e, "doctor")}
//         />
//         <br />
//         <Select
//           placeholder="select a patient"
//           className="w-25 m-auto"
//           options={patientSelection()}
//           onChange={(e) => onChange(e, "patient")}
//         />
//         <br />

//         <Select
//           placeholder="select a date"
//           className="w-25 m-auto"
//           options={datelist}
//           onChange={(e) => onChange(e, "date1")}
//         />
//         <br />
//         <Select
//           placeholder="select a time"
//           className="w-25 m-auto"
//           options={timelist2}
//           onChange={(e) => onChange(e, "time")}
//         />
//         <br />
//         <Button variant="primary" type="submit" disabled={!isValid}>
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// }
