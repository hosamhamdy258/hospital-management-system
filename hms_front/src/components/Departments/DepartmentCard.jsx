import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

const DepartmentCard = ({name , logo_img ,id}) => {
  return (
    <Col  lg='4' sm="6" md="6" className='d-flex justify-content-center'>
        <div className="hDepts-imgbx">
          <img src={logo_img} alt=""  />
          <div className="hDepts-txtx">
            <h3>{name}</h3>
            <Link className="depCard_link" to={`/departments/${id}`} d_id={id}>read more <ArrowRightCircle size={15}/>
            </Link>
          </div>
        </div>
    </Col>
  )
}

export default DepartmentCard