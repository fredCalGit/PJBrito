import React from 'react'
import logoNameWhite from '../../images/logoNameWhite.png'

import {FooterContainer,
        FooterWrap,
       
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink
    
        } from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
               
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        <img alt="logo" className="logoColor" src={logoNameWhite}/>
                        </SocialLogo>
                        <WebsiteRights>desenvolvido por <FooterLink target="_blank" href="//www.fredcal.com">fredCal</FooterLink>, todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/pjbritoassessoria/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Twitter">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
