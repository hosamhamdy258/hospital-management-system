import Banner from './Banner';
import Contact from './Contact';
import Departments from './Departments/Departments';
import Doctors from './Doctors';
import React from 'react'
import Statisc from './Statisc/Statisc';
import WeSummary from './Summary/WeSummary';

const Home = () => {
  return (
    <>
     <Banner/>
     <Doctors />
     <Departments />
     {/* <Contact/> */} 
     <WeSummary/>
     <Statisc/>

    </>
  )
}

export default Home