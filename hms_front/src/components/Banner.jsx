// import 'animate.css'

import {Col, Container, Row} from 'react-bootstrap'
import { useEffect, useState } from 'react';

import {ArrowRightCircle} from 'react-bootstrap-icons';
import React from 'react'
import headerImg from '../assets/img/h5.webp'

const Banner = () => {
    const [loopNumber ,setLoopNumber]=useState(0);
    const toRotate =['Better Doctors' , 'Better Care','Your Health Is Our Priority'];
    const [isDeleting , setIsDeleting]=useState(false);
    const [text,setText]=useState('');

    const period=2000;
    const [delta,setDelta]=useState(300-Math.random()*100);

    useEffect(()=>{
        let ticker =setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)}
    },[text])

    const tick=()=>{
        let i = loopNumber % toRotate.length; 
        let fullText =toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta=>prevDelta/2);
        }
        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNumber(loopNumber+1);
            setDelta(500);
        }
    }

  return (
    <section className="banner" id='home'>
        <Container>
            <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to HOPE
                        </span>
                  
                        <h2>{`Where `} <span className='wrap'>{text}</span></h2>
                        <p>HOPE is an online Hospital Management System Graduation Project Created by ITIans team</p>
                        <button onClick={()=>console.log('appointment')}>Make an Appointment <ArrowRightCircle size={23}/> </button>
                    </Col>
                   {/* <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImage"/>
                    </Col>
                   */}  
            </Row>
        </Container>
    </section>

  )
}

export default Banner