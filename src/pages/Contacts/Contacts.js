import React from 'react'
import Header from '../../components/Header/Header'
import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import './Contacts.css'

export default function Contacts() {
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
            <SiWhatsapp className='wppIcon'/>
            <h4 className='wppNumber'>(31)98260-3250</h4>
          </div>
          {/* <SiLinkedin className='linkedinTag' /> */ }
          {/* <SiGithub className='githubTag' /> */ }
        </div>
      </div>
    </>
  )
}
