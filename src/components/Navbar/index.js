import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import logoWhite from '../../images/logoWhite.png'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                    <img className="logoColor" src={logoWhite} alt="logomarca" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="sobre"
                            smooth={true} duration={500} spy={true} exact='true' offset={80} activeClass='active'
                            >Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to="conheca" smooth={true} duration={500} spy={true} exact='true' offset={80}>Conheça</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks  to="servicos" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="local" smooth={true} duration={500} spy={true} exact='true' offset={50}>Localização</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to="contact" smooth={true} duration={500} spy={true} exact='true' offset={50}>Contato</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                      <NavBtn>
                        <NavBtnLink to="/" >Área do Cliente</NavBtnLink>
                     </NavBtn> 
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
