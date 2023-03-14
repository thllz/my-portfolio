import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
// import photo from '../../db/images/personalPhotoHome.png'

export default function Home() {
  return (
    <>
      <Header />
      <div className='mainHome'>
        <h1 className='mainText'>Olá, Bem vindo(a)</h1>
        <h1 className='mainText2'>Sou o <span className='textColor'>Thelisom Souto</span>,</h1>
        <h1 className='mainText3'>Desenvolvedor Web Full-Stack</h1>
      </div>
        {/* <img className='personalPhoto' src={ photo } alt='Foto pessoal' /> */}
    </>
  )
}
