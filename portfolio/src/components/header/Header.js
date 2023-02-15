import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <div className='mainHeader'>
      <button className='homeBtn'>Home</button>
      <button className='aboutBtn'>About me</button>
      <button className='projectsBtn'>Projects</button>
      <button className='contactsBtn'>Contacts</button>
      </div>
    </div>
  )
}
