import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Projects.css'
import mock from '../../db/projectsMock'
// import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Modal from 'react-modal';

export default function Projects() {

  const [star, setStar] = useState(true);
  const [fund, setFund] = useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [getUrl, setGetUrl] = useState('');

  const starProjects = mock.filter((project) => project.star === 1);
  const fundProjects = mock.filter((project) => project.class === 'fundamentos');
  const frontProjects = mock.filter((project) => project.class === 'frontend');
  const backProjects = mock.filter((project) => project.class === 'backend');

  const handleShowStarred = () => {
    setStar(true);
    setFund(false);
    setFront(false);
    setBack(false);
  };
  const handleShowFund = () => {
    setStar(false);
    setFund(true);
    setFront(false);
    setBack(false);
  };
  const handleShowFront = () => {
    setStar(false);
    setFund(false);
    setFront(true);
    setBack(false);
  };
  const handleShowBack = () => {
    setStar(false);
    setFund(false);
    setFront(false);
    setBack(true);
  }


  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleGetUrl = (event) => {
    const { innerText } = event.target;
    const project = mock.find((p) => p.name === innerText);
    console.log(event);
    if (!project.url.includes('O Projeto')) return setGetUrl(project.url);
  }

  const openModal = (event) => {
    handleGetUrl(event)
    setIsOpen(true);
    // setStar(false);
    // setFund(false);
    // setFront(false);
    // setBack(false);
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setIsOpen(false);
    setStar(true);
    setFund(false);
    setFront(false);
    setBack(false);
  }

  const settings = {
    showThumbs: false,
    showStatus: false,
    centerMode: true,
    autoPlay: true,
    infiniteLoop: true,
    centerSlidePercentage: 60,
    transitionTime: 1000,
    autoFocus: true,
    showArrows: false,
  };

  return (
    <>
      <Header />
      <div className='mainDiv'>
        <h4>Projetos</h4>
        <div className='divBtnsProjects'>
          <button className='btnProjectsFilter' onClick={ handleShowStarred }>Favoritos</button>
          <button className='btnProjectsFilter' onClick={ handleShowFund }>Fundamentos</button>
          <button className='btnProjectsFilter' onClick={ handleShowFront }>Front-end</button>
          <button className='btnProjectsFilter' onClick={ handleShowBack }>Back-end</button>
        </div>
        { star &&
          <Carousel { ...settings } className='carouselMain'>
            { starProjects.map((project) => (
              <div className='itemCarousel'>
                <img className='projectCover' onClick={ openModal } src={ project.img } alt='project cover' />
                <div className='projectTitle'>
                  <p className='legend' onClick={ openModal } name={ project.name }>{ project.name }</p>
                </div>
              </div>
            )) }
          </Carousel>
        }
        { fund &&
         <Carousel { ...settings } className='carouselMain'>
         { fundProjects.map((project) => (
           <div className='itemCarousel'>
             <img className='projectCover' onClick={ openModal } src={ project.img } alt='project cover' />
             <div className='projectTitle'>
               <p className='legend' onClick={ openModal } name={ project.name }>{ project.name }</p>
             </div>
           </div>
         )) }
       </Carousel>
        }
        { front &&
          <Carousel { ...settings } className='carouselMain'>
          { frontProjects.map((project) => (
            <div className='itemCarousel'>
              <img className='projectCover' onClick={ openModal } src={ project.img } alt='project cover' />
              <div className='projectTitle'>
                <p className='legend' onClick={ openModal } name={ project.name }>{ project.name }</p>
              </div>
            </div>
          )) }
        </Carousel>
        }
        { back &&
          <Carousel { ...settings } className='carouselMain'>
          { backProjects.map((project) => (
            <div className='itemCarousel'>
              <img className='projectCover' onClick={ openModal } src={ project.img } alt='project cover' />
              <div className='projectTitle'>
                <p className='legend' onClick={ openModal } name={ project.name }>{ project.name }</p>
              </div>
            </div>
          )) }
        </Carousel>
        }
      </div>
      <div>
        <Modal
          className='modalBox'
          isOpen={ modalIsOpen }
          onAfterOpen={ afterOpenModal }
          onRequestClose={ closeModal }
          ariaHideApp={ false }
        >
          <h2 className='previewTextModal'>Preview</h2>
          <div className='divIframe'>
            <iframe className='iframe' title='projectViewer' src={ getUrl }></iframe>
          </div>
        </Modal>
      </div>
    </>
  )
}
