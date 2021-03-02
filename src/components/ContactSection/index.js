import React from "react";
import {

  Grid,

  TextareaAutosize,
  TextField,
} from "@material-ui/core";

import {

  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,

  Column2,
  ImgWrap,
  Img,
  MailButton,
} from "./ContactElements";

import emailjs from "emailjs-com";

const ContactSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
 
  headline,
  

  img,
  alt,
}) => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s19qzgo",
        "template_jnb0x96",
        e.target,
        "user_O9JX8emWta9P0qQu8fqhO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>

                <form onSubmit={sendEmail}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="name"
                        type="text"
                        label="Nome"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="subject"
                        type="text"
                        label="Assunto"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="email"
                        type="email"
                        label="Email para contato"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextareaAutosize
                        rowsMin={6}
                        rowsMax={6}
                        aria-label="empty textarea"
                        name="mensagem"
                        placeholder="Mensagem"
                        required
                        label="Mensagem"
                      />
                    </Grid>
                  </Grid>

                  <br />
                  <MailButton type="submit">Enviar</MailButton>
                </form>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactSection;
