import React from 'react'
import {
    HomeContentWrapper, 
    ArticleSummaryWrapper,
    ArticleContent,
    ArticleSummaryCard,
    ArticleTitle,
    ArticleSummary,
    ColumnWrapper,
    ColumnContainer,
    Column,
    ColumnTitle,
    Cacao,
    Grow,
    Cattle,
    Trees
} from '../styles/Home.style'
import CacaoImg from '../images/Cacao.jpeg'
import GrowImg from '../images/Grow2.jpeg'
import CattleImg from '../images/Cattle.jpeg'
import TreesImg from '../images/Trees.jpeg'


function  Home() {
    return (
        <HomeContentWrapper>
        <ArticleSummaryWrapper>
            <ArticleSummaryCard>
                <Cacao src={CacaoImg}></Cacao>
                <ArticleContent>
                    <ArticleTitle>Small Farm, Big Story: Loco for Cacao</ArticleTitle>
                    <ArticleSummary>
                        Lydgate Farms on Kaua'i provides local quality chocolate direct to consumers.
                    </ArticleSummary>
                </ArticleContent>
            </ArticleSummaryCard>
            <ArticleSummaryCard>
                <Grow src={GrowImg}></Grow>
                <ArticleContent>
                    <ArticleTitle>Growing Together</ArticleTitle>
                    <ArticleSummary>
                    How three family farms on Hawaii Island survived against the odds.
                    </ArticleSummary>
                </ArticleContent>
            </ArticleSummaryCard>
            <ArticleSummaryCard>
                <Cattle src={CattleImg}></Cattle>
                <ArticleContent>
                    <ArticleTitle>Act Now on Act 90</ArticleTitle>
                    <ArticleSummary>
                        Paniolos for long-term production. 
                    </ArticleSummary>
                </ArticleContent>
            </ArticleSummaryCard>
            <ArticleSummaryCard>
                <Trees src={TreesImg}></Trees>
                <ArticleContent>
                    <ArticleTitle>Oh, Christmas Tree!</ArticleTitle>
                    <ArticleSummary>
                        Four farms where you can visit and take home a Hawaii-grown Christmas tree. 
                    </ArticleSummary>
                </ArticleContent>
            </ArticleSummaryCard>
        </ArticleSummaryWrapper>

            <ColumnWrapper>
                <ColumnContainer>
                    <Column>Column</Column>
                    <ColumnTitle>Tidbits</ColumnTitle>
                    <ColumnTitle>Talk Story</ColumnTitle>
                    <ColumnTitle>Industry News & Updates</ColumnTitle>
                    <ColumnTitle>Understanding Organics</ColumnTitle>
                    <ColumnTitle>Pests in Paradise</ColumnTitle>
                </ColumnContainer>
            </ColumnWrapper>
        </HomeContentWrapper>

       
    )
}

export default Home;










// export default function Home() {
//     return (
//         <>
//         <h1>WELCOME TO FARM & FOOD</h1>
//         <ArticlesList />
//         </>
//     )
// }