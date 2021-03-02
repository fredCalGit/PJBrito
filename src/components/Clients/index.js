import React, {Component} from 'react'
import logo1 from '../../images/logoAutomar.png'
import logo2 from '../../images/logoAutosul.png'
import logo3 from '../../images/logoCentrocor.webp'
import logo4 from '../../images/logoJotaauto.jpg'
import logo5 from '../../images/logoSamaritano.png'
import logo6 from '../../images/logoVolupia.png'
import Carousel from 'react-elastic-carousel'

import {Item,ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ClientsElements'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Clients() {
  return (
    <ServicesContainer>
    
      
    <ServicesH1>Nossos Parceiros</ServicesH1>
        <Carousel style={{backgroundColor: "#4C58A7"}} breakPoints={breakPoints}>
        
          <ServicesCard>
            <ServicesIcon src={logo1}/>
          </ServicesCard>
          
          
          <ServicesCard>
            <ServicesIcon src={logo2}/>
          </ServicesCard>
          
          
          <ServicesCard>
            <ServicesIcon src={logo3}/>
          </ServicesCard>
          
          
          <ServicesCard>
            <ServicesIcon src={logo4}/>
          </ServicesCard>
          
          
          <ServicesCard>
            <ServicesIcon src={logo5}/>
          </ServicesCard>
          
          
          <ServicesCard>
            <ServicesIcon src={logo6}/>
          </ServicesCard>
          
       
        </Carousel>

      
      
    </ServicesContainer>
  );
}

export default Clients