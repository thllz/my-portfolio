import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Projects.css'
import mock from '../../db/projectsMock'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {

  const [star, setStar] = useState(true);
  const [fund, setFund] = useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);

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

  return (
    <>
      <Header />
      <div className='mainDiv'>
        <h4>Projetos</h4>
        <div>
          <button onClick={ handleShowStarred }>Favoritos</button>
          <button onClick={ handleShowFund }>Fundamentos</button>
          <button onClick={ handleShowFront }>Front-end</button>
          <button onClick={ handleShowBack }>Back-end</button>
        </div>
        { star &&
          <label className='fundLabel'>
            <p>Favoritos</p>
            <Carousel pause fade>
              { starProjects.map((project) => (
                <Carousel.Item interval={5000} style={ { width: '70%'} }>
                  <img className='projectCover' src={ project.img } alt='project cover' />
                  <Carousel.Caption>
                    <p>{ project.name }</p>
                    <p>Clique para ver mais...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )) }
            </Carousel>
          </label>
        }
        { fund &&
          <label className='fundLabel'>
            <p>Fundamentos</p>
            <Carousel pause>
              { fundProjects.map((project) => (
                <Carousel.Item style={ { width: '70%' } }>
                  <img className='projectCover' src={ project.img } alt='project cover' />
                  <Carousel.Caption>
                    <p>{ project.name }</p>
                    <p>Clique para ver mais...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )) }
            </Carousel>
          </label>
        }
        { front &&
          <label>
            <p>Front-end</p>
            <Carousel>
              { frontProjects.map((project) => (
                <Carousel.Item style={ { width: '70%' } }>
                  <img className='projectCover' src={ project.img } alt='project cover' />
                  <Carousel.Caption>
                    <p>{ project.name }</p>
                    <p>Clique para ver mais...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )) }
            </Carousel>
          </label>
        }
        { back &&
          <label>
            <p>Back-end</p>
            <Carousel>
              { backProjects.map((project) => (
                <Carousel.Item style={ { width: '70%' } }>
                  <img className='projectCover' src={ project.img } alt='project cover' />
                  <Carousel.Caption>
                    <p>{ project.name }</p>
                    <p>Clique para ver mais...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )) }
            </Carousel>
          </label>
        }
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
