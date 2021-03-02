import React from 'react'
import {SidebarRoute, SideBtnWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './LocalElements'
import {Link as LinkS} from 'react-scroll'

const LocalSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, img, alt}) => {
    return (
        <>   
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>
                                <p><b>Pedro Jorge de Brito Silva, CRC: PB 460409</b></p><br/> 
                                <p><b>E-mail:</b> <a href="mailto:pedrojorge@pedrojorge.com.br">pedrojorge@pedrojorge.com.br</a></p><br/>
                                <p><b>Fone:</b> (83) 9 9920 9920</p><br/>
                                <p><b>Endereço:</b><br/>Rua Major José de Barros, 167, Centro</p>
                                <p>CEP: 58013-410</p>
                                <p>João Pessoa, Paraíba</p>

                              </Subtitle>
                              <BtnWrap>
                              <SideBtnWrap>
                                 <SidebarRoute to="/">
                                 <LinkS  to="contact" smooth={true} duration={500} spy={true} exact='true' offset={50}>Fale Conosco</LinkS>
                                 
                                 </SidebarRoute>
                                </SideBtnWrap>
                              </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                              <Img src={img} alt={alt}/>
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default LocalSection