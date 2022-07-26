import React from 'react'
import styled from 'styled-components'
import right from '../assets/images/image-hero-desktop.png'
import mobile from '../assets/images/image-hero-mobile.png'
import databiz from '../assets/images/client-databiz.svg'
import audio from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'

export default function Spotlight() {
  return (
    <SpotlightWrapper>
        <SpotlightSection>
            <Left>
                <Heading1>Make</Heading1>
                <Heading2>remote work</Heading2>
                <Paragraph>
                    Get your team in sync. no matter your location.
                    Streamline processes, create team rituals, and
                    watch productivity soar.
                </Paragraph>
                <LearnBtn>Learn More</LearnBtn>
                <BottomUl>
                    <Li>
                        <IMG src={databiz} alt="Image" />
                    </Li>
                    <Li>
                        <IMG src={audio} alt="Image" />
                    </Li>
                    <Li>
                        <IMG src={meet} alt="Image" />
                    </Li>
                    <Li>
                        <IMG src={maker} alt="Image" />
                    </Li>
                </BottomUl>
            </Left>
            <Right0>
                <RightImg src={right}/>
            </Right0>
            <Right1>
                <RightImg src={mobile}/>
            </Right1>
        </SpotlightSection>
    </SpotlightWrapper>
  )
}

const SpotlightWrapper = styled.section`
    width: 80%;
    height: 610px;
    left: 0px;
    right: 0px;
    margin: auto;
    position: absolute;
    top: 100px;
    @media screen and (max-width:720px){
        height: 850px;
    }
    @media screen and (max-width:540px){
        height: 650px;
    }
`
const SpotlightSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media screen and (max-width:720px){
        flex-direction: column-reverse;
    }
    
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 50%;
    @media screen and (max-width:720px){
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
const Right0 = styled.div`
    width: 37%;
    height: 570px;
    padding-top: 40px;
    overflow: hidden;
    @media screen and (max-width:1200px){
        height: 500px;
        width: 42%;
    }
    @media screen and (max-width:960px){
        width: 45%;
    }
    @media screen and (max-width:720px){
        width: 0px;
    }
`

const Right1 = styled.div`
    width: 0%;
    height: 350px;
    @media screen and (max-width:720px){
        width: 100%;
    }
`
const Heading1 = styled.h1`
    font-weight: 700;
    font-size: 50px;
    @media screen and (max-width:1200px){
        font-size: 45px;
    }
    @media screen and (max-width:414px){
        font-size: 30px;
    }
`
const Heading2 = styled(Heading1)`
    margin-bottom: 50px;
    @media screen and (max-width:1200px){
        margin-bottom: 40px;
    }
`
const Paragraph = styled.p`
    color: hsl(0, 0%, 41%);
    font-size: 20px;
    font-weight: 600;
    line-height:2.5ch;
    text-align: justify;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width:1200px){
        font-size: 18px;
    }
    @media screen and (max-width:960px){
        font-size: 16px;
    }
    @media screen and (max-width:414px){
        font-size: 12px;
    }
`
const LearnBtn = styled.button`
    color: #fff;
    background: #111;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 90px;
    border:none;
    font-size: 15px;
    font-weight: 600;
    &:hover{
        color:#111;
        background: #fff;
        border:2px solid #111;
    }
    @media screen and (max-width:1200px){
        margin-bottom: 90px;
        font-size: 13px;
    }
    @media screen and (max-width:960px){
        margin-bottom: 80px;
    }

    @media screen and (max-width:420px){
        width: 100px;
        font-size: 10px;
        height: 40px;
    }
`
const BottomUl = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:1200px){
        width: 82%;
    }
`
const Li = styled.li`
    width: 18%;
    @media screen and (max-width:1200px){
        width: 19%;
    }
`
const IMG = styled.img`
    width: 100%;
`
const RightImg = styled.img`
    width: 100%;
    height: 100%;
`