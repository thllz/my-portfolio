import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import { SiLinkedin, SiGithub, SiWhatsapp, SiCoffeescript } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { MdContentCopy } from 'react-icons/md'
import './Contacts.css'
import { useForm, ValidationError } from '@formspree/react';
import Footer from '../../components/Footer/Footer'
import { Alert, Button, IconButton, TextField } from '@mui/material'
import 'animate.css';

export default function Contacts() {
  const [state, handleSubmit] = useForm("xoqzndyy");
  const [success, isSuccess] = useState(false);
  const [error, isError] = useState(false);
  const [disabled, isDisabled] = useState(true);
  const [emailBox, isEmailBox] = useState(false);
  const [wppBox, isWppBox] = useState(false);
  const [linkedinBox, isLinkedinBox] = useState(false);
  const [githubBox, isGithubBox] = useState(false);
  const [email, setEmail] = useState();
  const [message, setMessage] = useState('PORTFOLIOMESSAGE:');
  const [copied, setCopied] = useState(false);

  const isInitialMount = useRef(true);

  const emailOpenBox = () => {
    const emailIcon = document.getElementById('email')
    emailIcon.addEventListener('click', () => {
      isWppBox(false);
      isLinkedinBox(false);
      isGithubBox(false);
      isEmailBox(true);
    })
  }

  const wppOpenBox = () => {
    const wppIcon = document.getElementById('wpp')
    wppIcon.addEventListener('click', () => {
      isLinkedinBox(false);
      isGithubBox(false);
      isEmailBox(false);
      isWppBox(true);
    })
  }

  const linkedinOpenBox = () => {
    const linkedinIcon = document.getElementById('linkedin')
    linkedinIcon.addEventListener('click', () => {
      isWppBox(false);
      isGithubBox(false);
      isEmailBox(false);
      isLinkedinBox(true);
    })
  }

  const githubOpenBox = () => {
    const githubIcon = document.getElementById('github')
    githubIcon.addEventListener('click', () => {
      isWppBox(false);
      isLinkedinBox(false);
      isEmailBox(false);
      isGithubBox(true);
    })
  }

  const sendMessage = () => {
    if (state.succeeded) {
      isSuccess(true);
    } else {
      isSuccess(false);
      isError(true);
    }

  }

  const scrollToEmailForm = () => {
    const emailForm = document.getElementById('formEmail')
    emailForm.scrollIntoView({ behavior: 'smooth' })
  }

  const validator = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidMessage = (message.length >= 15)
    isValidEmail && isValidMessage ? isDisabled(false) : isDisabled(true)
  }

  const funcCaller = () => {
    emailOpenBox()
    wppOpenBox()
    linkedinOpenBox()
    githubOpenBox()
  }

  const copyText = (type) => {
    if (type === 'email') {
      const emailText = document.getElementById("emailText").innerText
      navigator.clipboard.writeText(emailText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    if (type === 'whatsapp') {
      const wppText = document.getElementById('wppText').innerText
      navigator.clipboard.writeText(wppText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    if (type === 'linkedin') {
      const linkedinText = document.getElementById('linkedinText').innerText
      navigator.clipboard.writeText(linkedinText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    if (type === 'github') {
      const githubText = document.getElementById('githubText').innerText
      navigator.clipboard.writeText(githubText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    funcCaller()
  })

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      validator()
    }
  }, [email, message])

  return (
    <>
      <Header />
      <h1 className='contactsTitle'>Contatos</h1>
      <div className='mainDivContacts'>
        <div className='mainContacts'>
          <div className='divSocialIcons'>
            <IconButton>
              <HiOutlineMail
                onClick={ emailOpenBox }
                size={ 35 }
                className='emailIcon'
                id="email"
              />
            </IconButton>

            <IconButton>
              <SiWhatsapp
                onClick={ wppOpenBox }
                size={ 30 }
                className='wppIcon'
                id='wpp'
              />
            </IconButton>

            <IconButton>
              <SiLinkedin
                onClick={ linkedinOpenBox }
                size={ 30 }
                className='linkedinIcon'
                id='linkedin'
              />
            </IconButton>

            <IconButton>
              <SiGithub
                onClick={ githubOpenBox }
                size={ 30 }
                className='githubIcon'
                id='github'
              />
            </IconButton>

          </div>
          {
            emailBox
            && (
              <div className='emailBox'>
                <h4 onClick={ () => scrollToEmailForm() } id='emailText' className='emailText'>
                  thelisommagnos@hotmail.com
                </h4>
                <MdContentCopy onClick={ () => copyText('email') } id="copyIcon" value="thelisommagnos@hotmail.com" size={ 20 } />
              </div>
            )
          }
          {
            wppBox
            && (
              <div
                className='wppBox'
              >
                <a className='linkSocial' href='https://wa.me//5531982603250?text=Olá%20tudo%20bem?%20%20Vim%20através%20do%20seu%20portfólio.' target='_tab'>
                  <h4 className='wppNumber' id="wppText">(31)98260-3250</h4>
                </a>
                <MdContentCopy onClick={ () => copyText('whatsapp') } id="copyIcon" size={ 20 } />
              </div>
            )
          }
          {
            linkedinBox
            && (
              <div className='linkedinBox'>
                <a className='linkSocial' href='https://www.linkedin.com/in/thelisom/' target='_tab'>
                  <h4 className='linkedinText' id="linkedinText">linkedin.com/in/thelisom</h4>
                </a>
                <MdContentCopy onClick={ () => copyText('linkedin') } id="copyIcon" size={ 20 } />
              </div>
            )
          }
          {
            githubBox
            && (
              <div className='githubBox'>
                <a className='linkSocial' href='https://github.com/thllz' target='_tab'>
                  <h4 className='githubText' id="githubText">github.com/thllz</h4>
                </a>
                <MdContentCopy onClick={ () => copyText('github') } id="copyIcon" size={ 20 } />
              </div>
            )
          }
          {
            copied
            && (
              <Alert severity='success' sx={ { margin: 'auto', padding: '10px', marginTop: '20px' } }>Copiado para a área de transferência!</Alert>
            )
          }
          <div className='mainFormContact'>
            <div className='formTextHeader'>
              <SiCoffeescript size={ 30 } />
              <h2 id='formEmail'>Pegue um café e bora bater um papo!</h2>
            </div>
            <form className='formContact' onSubmit={ handleSubmit }>
              <TextField
                label="Email"
                type="email"
                onChange={ ({ target }) => setEmail(target.value) }
                name="email"
                className='emailInputForm'
                placeholder='Digite seu email'
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={ state.errors }
              />
              <TextField
                className='inputMessageForm'
                name="message"
                onChange={ ({ target }) => setMessage(target.value) }
                placeholder='Olá, tudo bem?...'
                label="Mensagem"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={ state.errors }
              />
              <Button
                type="submit"
                // disabled={ state.submitting }
                disabled={ disabled }
                className="btnEmailInput"
                variant="outlined"
                onClick={ sendMessage }
              >
                Enviar
              </Button>
            </form>
            {
              success
              && <Alert severity='success'>Mensagem enviada com sucesso!</Alert>
            }
            {
              error
              && <Alert severity='error'>Mensagem não enviada</Alert>
            }
          </div>
        </div>
      </div >
      <footer>
        <Footer />
      </footer>
    </>
  )
}