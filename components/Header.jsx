import React, { useState, useEffect, createRef } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import Image from 'next/image';
import Logo from './Logo';
import { TELEGRAM_LINK, TWITTER_LINK, SUBSTACK_LINK } from '../utils/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [logoColor, setLogoColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const logoIconRef = createRef()
  
  const useToggle = () => {
    setIsOpen(!isOpen)
    const header = document.getElementById('header');
    
    header.classList.toggle('blue-bg')
    console.log(header.classList.contains('blue-bg'))
    const newColor = logoColor == "black" ? "white" : "black";
    const newBgColor = logoColor == "white" ? "#5252FF" : "white";
    setLogoColor(newColor);
    setBgColor(newBgColor);
    document.body.classList.toggle('no-scroll');
  };

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar id="header" light expand="md">
        <NavbarBrand className="logo-mobile" href="/">
          <Logo setRef={logoIconRef} fill={logoColor}/>
        </NavbarBrand>
        <NavbarToggler id="burger-menu" onClick={useToggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand className="logo-dekstop" href="/">
            <Image src="/ccc-logo.svg" alt="CCC Hero Image" width={80} height={80} />
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="#welcome">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#community">Community</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#newsletter">Newsletter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <div className="header-logo-mobile">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="header-menu">
                <img className="header-icon" src="/tele-icon.svg" alt="telegram" />
            </a>
            <a href={SUBSTACK_LINK} target="_blank" rel="noopener noreferrer" className="header-menu">
                <img className="header-icon" src="/substack-icon.svg" alt="substack" />
            </a>
            <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="header-menu">
                <img className="header-icon" src="/twitter-icon.svg" alt="twitter" />
            </a>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;