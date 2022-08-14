import Banner from './Banner';
import Contact from './Contact';
import Departments from './Departments/Departments';
import Doctors from './Doctors/Doctors';
import React from 'react'

const Home = () => {
  return (
    <>
     <Banner/>
     <Doctors/>
     <Departments/>
     <Contact/>
    </>
  )
}

export default Home