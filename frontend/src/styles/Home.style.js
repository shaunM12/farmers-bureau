import styled from "styled-components";
// import { Link } from "react-router-dom"

export const HomeContentWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 3rem;
    
`
export const ArticleSummaryWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 15rem;
    margin-left: 7rem;
    flex-direction: column;
    width: 865px;
    height: 1320px;

    @media screen and (max-width: 600px) {
        .column {
          width: 100%;
        }
`

export const ArticleSummaryCard = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 830px;
    height: 320px;
    // background-color: #fff;
    // box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
    // border-radius: 40px;
`

export const ArticleContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    
`

export const ArticleTitle = styled.h3 `
    font-size: 25px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.6rem;
    font-family: 'Poppins', sans-serif;
    
`

export const ArticleSummary = styled.p `
    font-size: 20px;
    padding-bottom: 1.3rem;
    font-family: 'Poppins', sans-serif;
`

export const Cacao = styled.img `
    height: 225px;
    width: 310px;
    margin: 2rem; 
`

export const Grow = styled.img `
    height: 225px;
    width: 310px;
    margin: 2rem; 
`

export const Cattle = styled.img `
    height: 225px;
    width: 310px;
    margin: 2rem; 
`

export const Trees = styled.img `
    height: 225px;
    width: 310px;
    margin: 2rem; 
`

export const ColumnWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 15rem;
    margin-right: 7rem;
    margin-left: 13rem;
    flex-direction: column;
    width: 300px;
    height: 285px;
    

    @media screen and (max-width: 600px) {
        .column {
        width: 100%;
        }
`

export const ColumnContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    width: 280px;
    height: 285px;
    // background-color: #fff;
    // box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
    // border-radius: 40px;
`

export const Column = styled.h1 `
    display: flex;
    justify-content: center;
    font-size: 2em;
    font-weight: bold;

`

export const ColumnTitle = styled.h2 `
    display: flex;
    justify-content: start;
    font-size: 1.17em;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

`
