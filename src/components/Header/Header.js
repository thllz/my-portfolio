import React from 'react'
import './Header.css'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className='mainHeader'>
        <div className='divLinkInside'>
          <Link className='homeBtn' to='/'>Home</Link>
          <Link className='aboutBtn' to='/aboutme'>About</Link>
          <Link className='projectsBtn' to='/projects'>Projects</Link>
          <Link className='contactsBtn' to='/contacts'>Contacts</Link>
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
