import styled from 'styled-components'

export const Item= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008B;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  
`;
export const ServicesContainer=styled.div`
background-color: "#4C58A7";

`

export const ServicesCard=styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    width: 300px;
    max-height: 340px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    
    width: 250px;
    margin: auto;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: #4C58A7;
    margin-bottom: 44px;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    
    font-size:1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`
