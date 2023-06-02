import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Projects.css'
import mock from '../../db/projectsMock'
import Modal from 'react-modal';
import Footer from '../../components/Footer/Footer';
import { Card, CardMedia, TextField } from '@mui/material';
import { AiOutlineCloseSquare, AiOutlineEye, AiOutlineFullscreen } from 'react-icons/ai'

export default function Projects() {

  const [getUrl, setGetUrl] = useState('');

  const dataStar = mock.filter((p) => p.star === 1);

  const [modalDetailOpen, setDetailIsOpen] = React.useState(false);
  const [modalIframeOpen, setModalIframeOpen] = React.useState(false);
  const [dataProjectDetail, setDataProjectDetail] = React.useState();

  const handleGetUrl = (event) => {
    const project = dataStar.find((p) => p.id === +event.id);
    if (!project.url.includes('O Projeto')) return setGetUrl(project.url);
  }


  const openModalDetail = (event) => {
    handleSetData(event);
    setDetailIsOpen(true);
  }

  const openModalIframe = (event) => {
    handleGetUrl(event);
    setModalIframeOpen(true);
    setDetailIsOpen(false);
  }
  const handleSetData = (target) => {
    const getSpecifyData = mock.find((p) => p.id === +target.id)
    console.log(target.id);
    setDataProjectDetail(getSpecifyData)
  }


  const afterOpenModalIframe = () => {

  }

  const closeModalIframe = () => {
    setModalIframeOpen(false);
    setDetailIsOpen(true)
  }

  const afterOpenModalDetail = () => {

  }

  const closeModalDetail = () => {
    setDetailIsOpen(false);
  }

  return (
    <>
      <Header />
      <h4 className='titleTextProjects'>Projetos</h4>
      <div className='mainDivProjects'>
        {
          dataStar.map((p) => (
            <Card
              key={ p.id }
              className='cardProject'
              onClick={ ({ target }) => openModalDetail(target) }
              id={ p.id }
            >
              <CardMedia
                component='img'
                className='cardMedia'
                image={ p.img }
                id={ p.id }
                height='150'
                alt='Imagem do projeto'
                onClick={ ({ target }) => openModalDetail(target) }

              />
              <div className='previewIcon'>
                <i className='eyeIcon'>
                  <AiOutlineEye
                    onClick={ ({ target }) => openModalDetail(target) }
                    size={ 40 }
                    id={ p.id }
                  />
                </i>
              </div>
              <h3
                className='cardHeader'
                id={ p.id }
              >
                { p.name }
              </h3>
            </Card>
          ))
        }
      </div >
      <h1 className='textProjectWillAdd'>Outros projetos serão adicionados em breve...</h1>
      <div>
        {
          dataProjectDetail
          && (
            <Modal
              className='modalDetail'
              isOpen={ modalDetailOpen }
              onAfterOpen={ afterOpenModalDetail }
              onRequestClose={ closeModalDetail }
              ariaHideApp={ false }
            >
              <div className='divHeaderModalDetail'>
                <h1 className='modalDetailProjectTitle'>{ dataProjectDetail.name }</h1>
                <AiOutlineCloseSquare size={ 30 } className='modalDetailIconExit' onClick={ closeModalDetail } />
              </div>
              <div className='cardDetailInfo'>
                <div className='cardDetailText'>
                  <h4 className='cardDetailTextTitle'>Descrição</h4>
                  <h3 className='cardDetailTextDesc'>{ dataProjectDetail.desc }</h3>
                </div>
                <div
                className='divModalDetailImgSubText'
                >
                <img
                  onClick={ ({ target }) => openModalIframe(target) }
                  id={ dataProjectDetail.id }
                  className='cardDetailImage'
                  src={ dataProjectDetail.img }
                  alt="Imagem do projeto"
                  />
                  <h2 className='modalDetailTextVisualize'>Clique para visualizar</h2>
                  </div>
              </div>
            </Modal>
          )
        }
        <Modal
          className='modalIframe'
          isOpen={ modalIframeOpen }
          onAfterOpen={ afterOpenModalIframe }
          onRequestClose={ closeModalIframe }
          ariaHideApp={ false }
        >
          <div className='divContentHeaderModalDetail'>
            <h2 className='previewTextModal'>Preview</h2>
            <div className='divModalDetailExitMaximize'>
              <a href={ getUrl }>
                <AiOutlineFullscreen size={ 30 } className='modalDetailIconMaximize' onClick={ ({ target }) => console.log(target) } />
              </a>
              <AiOutlineCloseSquare size={ 30 } className='modalIframeIconExit' onClick={ closeModalIframe } />
            </div>
          </div>
          <div className='divIframe'>
            <iframe
              className='iframe'
              title='projectViewer'
              src={ getUrl }
            />
          </div>
        </Modal>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
