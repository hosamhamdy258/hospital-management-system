import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDoctors } from "./../store/Doctors";
import { postProfile } from "./../store/Profile";
import { useRef } from "react";

const Completedata = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users.user);
  const profileState = useSelector((state) => state.profileSlice);

  const depState = useSelector((state) => state.departmentsSlice);
  const id_number = useRef(null);
  const first_name = useRef(null);
  const last_name = useRef(null);
  const address = useRef(null);
  const birth_date = useRef(null);
  const gender = useRef(null);
  const durgs = useRef(null);
  const comment = useRef(null);
  const department = useRef(null);
  const img = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      id_number: id_number.current.value,
      address: address.current.value,
      birth_date: birth_date.current.value,
      gender: gender.current.value,
    };
    if (!userState.is_doctor && !userState.is_emp && !userState.is_superuser) {
      data["durgs"] = durgs.current.value;
      data["comment"] = comment.current.value;
    }
    if (userState.is_doctor) {
      data["department"] = department.current.value;
      data["img"] = img.current.files[0];
    }
    console.log(data);

    dispatch(postProfile(data));
  };

  const navigate = useNavigate();

  if (profileState.data.profile_complete) {
    console.log("in");
    try {
      navigate("/");
    } catch (error) {}
  }

  return (
    <div className="complete_data">
       <div className="container-fluid ">
     

     <div className="row mt-5 mb-4 justify-content-center">
  
       <div className="col-lg-8 col-md-6 border p-5 shadow bg-light">
       <div className="cData_header  p-3">
       <h2>
         Finish Account Setup
       </h2>
       <p className="summ">Complete your account by providing your proper info</p>
     </div>
     <div className="img_cData">
         
     </div>
         <div className="col-12">
           <h5 className="m-0 font-weight-bold text-dark">
           <i class="fa-solid fa-user-pen px-3"></i>Personal info
           </h5>
           <hr />
         </div>
         <form
           action=""
           method="post"
           className="form"
           onSubmit={handleSubmit}
           encType="multipart/form-data"
         >
           <div className="row mx-1 mb-2 text-center justify-content-center">
           <div className="row d-flex justify-content-around">

           <input
               required
               type="text"
               placeholder="Enter first name"
               className="form_control col-md-5 mb-3"
               ref={first_name}
             />
               {/* <input
               type="text"
               placeholder="Enter middle name"
               className="form_control col-md-5 mx-2 mb-2"
             /> */}
              <input
               required
               type="text"
               placeholder="Enter last name"
               className=" form_control form_group-2 col-md-5 mb-3"
               ref={last_name}
             />
             </div>
             <hr className="cData_hr"/>
             <div className="row d-flex justify-content-around">
             <input 
               ref={id_number}
               required
               type="text"
               placeholder="Enter National id"
               className="form_control col-md-5 mx-2 mb-3"
             />
              <input
               required
               type="text"
               placeholder="Enter your Address"
               className="form_control col-md-5 mx-2 mb-3"
               ref={address}
             />
             </div>
             <hr className="cData_hr"/>

             <div className="bDate_cData row d-flex justify-content-around">
              <label className=" col-md-3 mx-1 ">Enter your Date of Birth : </label> 
             <input
               ref={birth_date}
               type="date"
               className="form_control col-md-7 mb-3"
               required
             />
             </div>
             <hr className="cData_hr"/>

             <select
               required
               ref={gender}
               name="gender"
               className="form_control col-md-5 mb-3"
             >
               <option value="">Select your gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
             {userState.is_doctor ? (
               <>
                 <select
                   ref={department}
                   required
                   className="form_control col-md-5 mb-3"
                   placeholder="Select your department"
                 >
                   <option value="">Select your department</option>
                   {depState.departments.map((element) => {
                     return (
                       <option key={element.id} value={element.id}>
                         {element.name}
                       </option>
                     );
                   })}
                 </select>
                 <input
                   ref={img}
                   type="file"
                   id="exampleFormControlFile1"
                   className="form_control col-md-5 mb-3"
                 />
               <hr className="cData_hr"/>

               </>
               
             ) : null}
             {!userState.is_doctor &&
             !userState.is_emp &&
             !userState.is_superuser ? (
               <>
                 <input
                   type="text"
                   ref={durgs}
                   placeholder="Enter drugs taken"
                   className="form_control col-md-5 mx-2 mb-3"
                 />
                               <hr className="cData_hr"/>

                 <input
                   type="text"
                   ref={comment}
                   placeholder="Enter your comments"
                   className="form_control col-md-10 mb-3"
                 />
               </>
             ) : null}
           </div>
           <hr />
           <div className="row g-3 mb-1 mt-1">
             <div className="col-12 mt-1 text-center">
               <button type="submit" className="btn btn-secondary mx-3">
                 Submit Data
               </button>
               <button
                 type="button"
                 className="btn btn-outline-secondary  me-2"
               >
                 Cancel
               </button>
             </div>
           </div>
         </form>
       </div>
     </div>
   </div>
    </div>
   
  );
};

export default Completedata;
