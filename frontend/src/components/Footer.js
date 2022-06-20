import React, { useState } from 'react'
import { 
  FooterContainer, 
  Logo, 
  FooterParagraph,
  ExtraSpace
} from '../styles/Footer.style'

const Footer = () => {
  return (
    <>
    <ExtraSpace> </ExtraSpace>
        <FooterContainer>
      <FooterParagraph>
        Please visit the Hawaii Farm Bureau website
      </FooterParagraph>
      <a href="https://hfbf.org/">
        <Logo src="https://hfbf.org/wp-content/uploads/2018/11/HFBF_logo-compressor.png" />
      </a>
    </FooterContainer>
    </>
  )
}

export default Footer
