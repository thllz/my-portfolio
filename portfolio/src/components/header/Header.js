import React from 'react'
import './Header.css'
import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function Header() {
  return (
    <div>
      <div className='mainHeader'>
        <div className='divLinkInside'>
          <button className='homeBtn'>Home</button>
          <button className='aboutBtn'>About</button>
          <button className='projectsBtn'>Projects</button>
          <button className='contactsBtn'>Contacts</button>
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
