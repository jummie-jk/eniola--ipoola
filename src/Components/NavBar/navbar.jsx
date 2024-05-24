import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import logo from '../../assets/Fulfilled.png'
import "./navbar.css"
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E5E5E5;
  color: #181717;
  padding: 1rem;
  font-family: 'Manrope' , sans-serif;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 3rem 3rem;
  font-size: 16px;

  a {
    color: #181717
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #181717;
    }
  }
  @media (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #181717;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #181717;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  position: absolute;
  top: 12%; 
  left: 0;
  display: none;
  flex-direction: column;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  width: 100%;
  height: 100vh; 
  z-index: 1000;

  @media (max-width: 767px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;
const NavOverlay = styled.div`
  position: fixed;
  top: 12%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px); 
  z-index: 999;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; 
  transition: opacity 0.3s ease; 
`;
export const NavBar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    useEffect(() => {
      const body = document.querySelector('body');

      if (isMobileNavOpen) {
          body.style.overflow = 'hidden'; 
      } else {
          body.style.overflow = 'auto'; 
      }

      return () => {
          body.style.overflow = 'auto'; 
      };
  }, [isMobileNavOpen]);


    return(
        <div className="navbar-main">
            <Nav>
                <div><img src={logo} alt="logo" className="NavLogo"/></div>
                {/* <div><p>Eniola Ipoola</p></div> */}
                <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                    {isMobileNavOpen ? 'Close' : 'Menu'}
                </MobileNavToggle>
                <DesktopNav>
                    <NavItem><a href="/">Home</a></NavItem>
                    {/* <NavItem><a href="/all-projects">Projects</a></NavItem> */}
                    <NavItem><a href="/about">About</a></NavItem>
                    <NavItem><a href="/blogs">Blogs</a></NavItem>
                </DesktopNav>
                
                <MobileNav isOpen={isMobileNavOpen}>
                  <NavItem><a href="/">Home</a></NavItem>
                  {/* <NavItem><a href="/all-projects">Projects</a></NavItem> */}
                  <NavItem><a href="/about">About</a></NavItem>
                  <NavItem><a href="/blogs">Blogs</a></NavItem>
                </MobileNav>
         </Nav>
         <NavOverlay isOpen={isMobileNavOpen} onClick={() => setIsMobileNavOpen(false)} />
        </div>
    )
}