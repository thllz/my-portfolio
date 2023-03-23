import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Projects.css'
import mock from '../../db/projectsMock'
import Slider from "react-slick";
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
    const { name } = event.target;
    const project = mock.find((p) => p.name === name);
    if (!project.url.includes('O Projeto')) return setGetUrl(project.url);
  }

  const openModal = (event) => {
    handleGetUrl(event)
    setIsOpen(true);
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setIsOpen(false);
  }
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    touchMove: false,
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
          <label>
            <Slider { ...settings } className='carouselMain'>
              { starProjects.map((project) => (
                <div className='itemCarousel'>
                  <img className='projectCover' onClick={ openModal } src={ project.img } name={ project.name } alt='project cover' />
                  <div className='projectTitle'>
                    <p>{ project.name }</p>
                    <p>Clique para ver mais...</p>
                  </div>
                </div>
              )) }
            </Slider>
          </label>
        }
        { fund &&
         <label>
         <Slider { ...settings } className='carouselMain'>
           { fundProjects.map((project) => (
             <div className='itemCarousel'>
               <img className='projectCover' onClick={ openModal } src={ project.img } name={ project.name } alt='project cover' />
               <div className='projectTitle'>
                 <p>{ project.name }</p>
                 <p>Clique para ver mais...</p>
               </div>
             </div>
           )) }
         </Slider>
       </label>
        }
        { front &&
          <label>
          <Slider { ...settings } className='carouselMain'>
            { frontProjects.map((project) => (
              <div className='itemCarousel'>
                <img className='projectCover' onClick={ openModal } src={ project.img } name={ project.name } alt='project cover' />
                <div className='projectTitle'>
                  <p>{ project.name }</p>
                  <p>Clique para ver mais...</p>
                </div>
              </div>
            )) }
          </Slider>
        </label>
        }
        { back &&
         <label>
         <Slider { ...settings } className='carouselMain'>
           { backProjects.map((project) => (
             <div className='itemCarousel'>
               <img className='projectCover' onClick={ openModal } src={ project.img } name={ project.name } alt='project cover' />
               <div className='projectTitle'>
                 <p>{ project.name }</p>
                 <p>Clique para ver mais...</p>
               </div>
             </div>
           )) }
         </Slider>
       </label>
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

// {/* <>
// <Header />
// <div className='mainDiv'>
//   {/* <div class="grid-container"> */}
//   <Carousel>
//     { mock.map((project) => (
//       // <div class="grid-item">
//       <Carousel.Item>
//         <div style={{display: 'block', background: 'red'}}>
//         <p>{ project.name }</p>
//         <img className='projectCover' src={ project.img } alt='project cover' />
//         {/* <p>Descrição: { project.desc }</p> */ }
//         {/* <p>Tags: { project.tags.map((t) => t) }</p> */ }
//         <p>Clique para ver mais...</p>
//         </div>
//       </Carousel.Item>
//       // </div>
//     )) }
//   </Carousel>
//   {/* </div> */}
// </div>
// </>
// )
// } */}
