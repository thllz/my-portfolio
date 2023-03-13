import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className='mainHome'>
        <h1 className='mainText'>Olá, Bem vindo(a)</h1>
        <h1 className='mainText2'>Sou o <span className='textColor'>Thelisom Souto</span>,</h1>
        <h1 className='mainText3'>Desenvolvedor Web Full-Stack</h1>
        {/* <h3 className='mainText4'>Currently located in Brazil</h3> */}
      </div>
    </>
  )
}
