import React from 'react'
import Header from '../../components/Header/Header'
import './About.css'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <>
      <Header />
      <div className='mainDiv'>
        <h1 className='aboutMeTitle'>Sobre mim:</h1>
        <h2 className='aboutMeText'>
          Mineiro, de Belo Horizonte. Sou eu: Thelisom Souto. Tenho 22 anos de idade, apaixonado por tecnologia desde que me entendo por gente.
          Cresci envolvido com computadores e foi por onde criei interesse pela coisa. [more text soon...]
        </h2>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
