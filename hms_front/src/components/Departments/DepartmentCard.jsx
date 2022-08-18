import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

const DepartmentCard = ({title , logo_img ,id}) => {
  return (
    <Col sm={6} md={4}>
        <div className="hDepts-imgbx">
          <img src={logo_img} alt=""  />
          <div className="hDepts-txtx">
            <h4>{title}</h4>
            <button onClick={()=>console.log('appointment')}>Read More <ArrowRightCircle size={15}/> </button>
            <Link className="dep_link" to={`/hDepts/${id}`} d_id={id}><span className="dept-readmore">read more<i className="fa fa-arrow-right px-2" aria-hidden="true"></i>
            </span>
            </Link>
          </div>
        </div>
    </Col>
  )
}

export default DepartmentCard