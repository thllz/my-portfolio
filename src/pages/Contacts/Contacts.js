import React from 'react'
import Header from '../../components/Header/Header'
import { SiLinkedin, SiGithub, SiWhatsapp, SiCoffeescript } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import './Contacts.css'
import { useForm, ValidationError } from '@formspree/react';

export default function Contacts() {
  const [state, handleSubmit] = useForm("xoqzndyy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <Header />
      <div className='mainDiv'>
        <h1 className='contactsTitle'>Contatos</h1>
        <div className='mainContacts'>
          <div className='emailBox'>
            <HiOutlineMail className='emailIcon' />
            <h4 className='emailText'>thelisommagnos@hotmail.com</h4>
          </div>
          <div className='wppBox'>
            <SiWhatsapp className='wppIcon' />
            <h4 className='wppNumber'>(31)98260-3250</h4>
          </div>
        </div>
        <div className='socialLinks'>
          <div className='linkedinBox'>
            <a className='linkedinBtnContacts' href='https://www.linkedin.com/in/thelisom/' target='_tab'>
              <SiLinkedin size={ 50 } />
            </a>
          </div>
          <div className='githubBox'>
            <a className='githubBtnContacts' href='https://github.com/thllz' target='_tab'>
              <SiGithub size={ 50 } />
            </a>
          </div>
        </div>
        <div className='mainFormContact'>
          <div className='formTextHeader'>
          <SiCoffeescript size={30}/>
          <h2>Pegue um café e bora bater um papo!</h2>
          </div>
          <form className='formContact' onSubmit={ handleSubmit }>
            <label htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder='email@email.com'
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={ state.errors }
            />
            <label>
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder='Olá, tudo bem?...'
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={ state.errors }
            />
            <button type="submit" disabled={ state.submitting }>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}