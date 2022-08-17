import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col } from 'react-bootstrap'
import React from 'react'

const DepartmentCard = ({title , img}) => {
  return (
    <Col sm={6} md={4}>
        <div className="hDepts-imgbx">
          <img src={img} alt=""  />
          <div className="hDepts-txtx">
            <h4>{title}</h4>
            <button onClick={()=>console.log('appointment')}>Read More <ArrowRightCircle size={15}/> </button>
          </div>
        </div>
    </Col>
  )
}

export default DepartmentCard