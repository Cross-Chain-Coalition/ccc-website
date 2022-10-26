import React, { useState, useEffect } from 'react';
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
import { TELEGRAM_LINK } from '../utils/constants' ;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <NavbarBrand className="logo-mobile" href="/">
          <Image src="/ccc-logo.png" alt="CCC Hero Image" width={80} height={80} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand className="logo-dekstop" href="/">
            <Image src="/ccc-logo.png" alt="CCC Hero Image" width={80} height={80} />
          </NavbarBrand>
          <Nav className="m-auto" navbar>
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
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
            Join Us
          </a>
        </Collapse>
        {/* <Container className="container-header">
        </Container> */}
      </Navbar>
    </div>
  );
}

export default Header;