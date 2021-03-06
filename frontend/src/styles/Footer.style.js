import styled from "styled-components"
import { Link } from "react-router-dom"

// export const ExtraSpace = styled.div`
// display: flex;
// flex-direction: column;
// min-height: 100vh;
// `

export const FooterContainer = styled.div`
  width: 100%;
  // height: 100px;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: auto;
  justifyContent: 'flex-end'
`

export const FooterParagraph = styled.div`
  display: flex;
  color: white;
  margin: auto;
  justify-content: space-between;
`


export const Logo = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: center;
  align-items: auto;
  max-width: 200px;
  height: auto;
`