import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import InfoSection from '../components/InfoSection'
import LocalSection from '../components/LocalSection'
import Services from '../components/Services'
import Clients from '../components/Clients'
import ContactSection from '../components/ContactSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from '../components/InfoSection/Data'

import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          
          <InfoSection {...homeObjOne}/>  
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
          <Services />
          <LocalSection {...homeObjFour}/>
          <Clients />
          <ContactSection {...homeObjFive}/>
          <Footer />


        </>
    )
}

export default Home