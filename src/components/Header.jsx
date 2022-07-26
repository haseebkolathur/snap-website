import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import arrowUp from '../assets/images/icon-arrow-down.svg'
import arrowDown from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import close from '../assets/images/icon-close-menu.svg'
import open from '../assets/images/icon-menu.svg'

export default function Header() {
    const [ show0, setShow0 ] = useState(false)
    const [ show1, setShow1 ] = useState(false)
    const [ menu,setMenu ] = useState(false)

  return (
    <>
        <Section>
            <HamburgerMenu onClick={()=>{setMenu(true)}} className={menu && "hide"}>
                <OpenSvg src={open} alt="" />
            </HamburgerMenu>
            <HeaderSection>
                <HeaderLeft>
                    <Logo>
                        <LogoImg src={logo} alt="snap"/>
                    </Logo>
                    <HeaderUl>
                        <HeaderLi>
                            <NavLink onClick= {() => {setShow0(!show0)}}>
                                <HeaderLiP className={show0 && 'show'}>Features</HeaderLiP> 
                                <ArrowSpan className={show0 ? "" : "show"}><ArrowImg src={arrowUp} alt="Image"/></ArrowSpan>
                                <ArrowSpan className={show0 ? "show" : ""}><ArrowImg src={arrowDown} alt="Image"/></ArrowSpan>
                            </NavLink>
                            <Display className={ show1 && "show" }>
                                <LiChild>
                                    <ChildFragment>
                                        <Icon src={todo}/>
                                        <Goto>Todo List</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={calender}/>
                                        <Goto>Calender</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={reminders}/>
                                        <Goto>Reminders</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={planning}/>
                                        <Goto>Planning</Goto>
                                    </ChildFragment>
                                </LiChild>
                            </Display>
                        </HeaderLi>
                        <HeaderLi>
                            <NavLink onClick={() => {setShow1(!show1)}}>
                                <HeaderLiP>Company</HeaderLiP>
                                <ArrowSpan className={show1 ? "" : "show"}><ArrowImg src={arrowUp} alt="Image"/></ArrowSpan>
                                <ArrowSpan className={show1 ? "show" : ""}><ArrowImg src={arrowDown} alt="Image"/></ArrowSpan>
                            </NavLink>
                            <Display className={`company ${show1 && "show"}`}>
                                <LiChild>
                                    <ChildFragment><Goto>History</Goto></ChildFragment>
                                    <ChildFragment><Goto>Our Team</Goto></ChildFragment>
                                    <ChildFragment><Goto>Blog</Goto></ChildFragment>
                                </LiChild>
                            </Display>
                        </HeaderLi>
                        <HeaderLi className='other'><HeaderLiP>Careers</HeaderLiP></HeaderLi>
                        <HeaderLi className='other'><HeaderLiP>About</HeaderLiP></HeaderLi>
                    </HeaderUl>
                </HeaderLeft>
                <HeaderRight>
                    <Login>Login</Login>
                    <Register>Register</Register>
                </HeaderRight>
            </HeaderSection>   {/* <......Header......> */}

            <Menu className={ menu && "show" }>
                <MenuField >
                    <MenuButtons onClick={()=>{ setMenu(!menu) }}>
                        <OpenSvg src={close} />
                    </MenuButtons>
                    <MenuUl>
                        <MenuLi>
                            <MenuNavLink onClick= {() => {setShow0(!show0)}}>
                                <MenuLiDiv>
                                    <HeaderLiP className={show0 && 'show'}>Features</HeaderLiP> 
                                    <ArrowSpan className={show0 ? "" : "show"}><ArrowImg src={arrowUp} alt="Image"/></ArrowSpan>
                                    <ArrowSpan className={show0 ? "show" : ""}><ArrowImg src={arrowDown} alt="Image"/></ArrowSpan>
                                </MenuLiDiv>
                                <MenuLiDisplay className={ show1 && "show" }>
                                    <LiChild>
                                        <ChildFragment>
                                            <Icon src={todo}/>
                                            <Goto>Todo List</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={calender}/>
                                            <Goto>Calender</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={reminders}/>
                                            <Goto>Reminders</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={planning}/>
                                            <Goto>Planning</Goto>
                                        </ChildFragment>
                                    </LiChild>
                                </MenuLiDisplay>
                            </MenuNavLink>
                        </MenuLi>

                        <MenuLi>
                            <MenuNavLink onClick={() => {setShow1(!show1)}}>
                                <MenuLiDiv>
                                    <HeaderLiP className={show1 && 'show'}>Company</HeaderLiP> 
                                    <ArrowSpan className={show1 ? "" : "show"}><ArrowImg src={arrowUp} alt="Image"/></ArrowSpan>
                                    <ArrowSpan className={show1 ? "show" : ""}><ArrowImg src={arrowDown} alt="Image"/></ArrowSpan>
                                </MenuLiDiv>  
                                <MenuLiDisplay className={`company ${show1 && "show"}`}>
                                    <LiChild>
                                        <ChildFragment><Goto>History</Goto></ChildFragment>
                                        <ChildFragment><Goto>Our Team</Goto></ChildFragment>
                                        <ChildFragment><Goto>Blog</Goto></ChildFragment>
                                    </LiChild>
                                </MenuLiDisplay>                          
                            </MenuNavLink>
                        </MenuLi>

                        <MenuLi className='other'><HeaderLiP>Careers</HeaderLiP></MenuLi>
                        <MenuLi className='other'><HeaderLiP>About</HeaderLiP></MenuLi>
                    </MenuUl>
                    <MenuButtonsAuth>
                        <Login>Login</Login>
                        <Register>Register</Register>
                    </MenuButtonsAuth> 
                </MenuField>
            </Menu>  {/* <......MobileMenu......> */}
        </Section>  {/* <......MainContainer......> */}
    </>
  )
}
const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
`
const HamburgerMenu = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top:30px;
    right:50px;
    z-index: 2;
    display: none;
    &.hide{
        display: none;
    }
    @media screen and (max-width:720px){
        display: block;
    }
    @media screen and (max-width:540px){
        width: 20px;
        height: 20px;
        top: 40px;
    }
`
const  HeaderSection = styled.section`
    width: 95%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    position: absolute;
    @media screen and (max-width:540px){
        width: 80%;
    }
`
const HeaderLeft = styled.div`
    width: 570px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 500px;
    }
`
const HeaderRight = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 200px;
    }
    @media screen and (max-width:720px){
        display: none;
    }
`
const Logo = styled.div`
    width: 80px;
    margin-top: 15px;
    @media screen and (max-width:960px){
        margin-top: 10px;
    }
`
const LogoImg = styled.img`
    width: 100%;
`
const HeaderUl = styled.ul`
    width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 400px;
    }
    @media screen and (max-width:720px){
        display: none;
    }
`
const HeaderLi = styled.li`
    color: hsl(0, 0%, 41%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    min-width: 100px;
    max-width: 150px;
    height: 20px;
    cursor: pointer;
    position: relative;
    &.other{
        margin-top: 5px;
    }
    &:hover{
        color: #111;
    }
    @media screen and (max-width:960px){
        font-size: 15px;
    }
`
const NavLink = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
`
const Display = styled.div`
    padding: 20px;    
    position: relative;
    top: 30px;
    left: -20px;
    min-width: 140px;
    height: 180px;
    box-sizing: border-box;
    box-shadow: rgba(90, 90, 111, 0.5) 0px 7px 42px 0px;
    border-radius: 15px;
    display: none;
    z-index: 1;

    &.show{
        display: block;
    }

    &.company{
        margin-left: 80px;
    }
`
const LiChild = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background: #fff;
`
const ChildFragment = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    background: #fff;
`
const Icon = styled.img`
    width: 15px;
    height: 15px;
    display: block;
`
const Goto = styled.a`
    width: auto;
    font-size: 15px;
    margin-left: 15px;
    background: #fff;
`

const HeaderLiP = styled.p`
    background: #fff;
    margin-right: 5px;
`
const ArrowSpan = styled.span`
    width: 0px;
    display: block;
    padding-bottom: 5px;
    background: #fff;
    box-sizing: border-box;
    &.show{
        width: 10px;
    }
`
const ArrowImg = styled.img`
    width: 100%;
    fill: black;
`
const Login = styled.div`
    color: hsl(0, 0%, 41%);
    background: #fff;
    width: 100px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
    @media screen and (max-width:960px){
        font-size: 15px;
    }
`
const Register = styled.div`
    background: #fff;
    color: hsl(0, 0%, 41%);
    width: 120px;
    height: 50px;
    border: 2px solid hsl(0, 0%, 41%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 17px;
    @media screen and (max-width:960px){
        font-size: 15px;
        width: 100px;
        height: 40px;
    }
`
const Menu = styled.section`
    background: rgba(0,0,0,0.7);
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    &.show{
        display: block;
    }
`
const MenuField = styled.section`
    width: 300px;
    height: 100vh;
    background: #fff;
    position: absolute;
    margin-right: 0px;
    right: 0px;
    padding: 100px 20px;
    display: flex ;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width:376px){
        width: 200px;
    }
`
const MenuUl = styled.ul`
    width: 250px;
    min-height: 200px;
    max-height: 400px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 50px;
    margin-top: 30px;
`
const MenuLi = styled.li`
    background: #fff;
    width:100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`
const MenuLiDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    ${HeaderLiP}{
        margin-right: 10px;
    }
    ${ArrowSpan}{
        padding-top: -10px;
    }
`
const MenuLiDisplay = styled.div`
    overflow: hidden;
    width: 100%;
    height: 0px;
    background: #fff;
    &.show{
        margin-top: 20px;
        min-height: 120px;
        max-height: 220px;
    }
`
const MenuNavLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    
`
const MenuButtons = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top:30px;
    right: 50px;
`
const OpenSvg = styled.img`
    width: 100%;
    height: 100%;
`
const MenuButtonsAuth = styled.div`
    width: 100%;
    height:100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
` 