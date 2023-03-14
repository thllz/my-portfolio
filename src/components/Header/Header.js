import React from 'react'
import './Header.css'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className='mainHeader'>
        <div className='divLinkInside'>
          <Link id='link' className='homeBtn' to='/'>Início</Link>
          <Link id='link' className='aboutBtn' to='/aboutme'>Sobre</Link>
          <Link id='link' className='projectsBtn' to='/projects'>Projetos</Link>
          <Link id='link' className='contactsBtn' to='/contacts'>Contatos</Link>
        </div>
        <div className='divSocialBtns'>
          <a className='linkedinBtn' href='https://www.linkedin.com/in/thelisom/' target='_tab'>
            <SiLinkedin />
          </a>
          <a className='githubBtn' href='https://github.com/thllz' target='_tab'>
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  )
}
