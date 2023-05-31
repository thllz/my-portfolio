import React from 'react'
import { main } from './FooterMUI'
import { Typography } from '@mui/material'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <Typography sx={ main }>
        Made with
         
        <span id="heartFooter">♥</span>
         
        by thllz
      </Typography>
    </>
  )
}
