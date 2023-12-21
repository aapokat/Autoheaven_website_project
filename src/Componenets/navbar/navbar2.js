import React, { useState, useEffect, useRef } from "react";
import './navbar2.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const ScrolledDiv = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`scrolled-div ${scrolled ? 'scrolled' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar');

      // Check if the menu is open before processing the click event
      if (isMobileMenuOpen && navbar) {
        // Exclude the menu button from closing the menu
        if (
          !navbar.contains(event.target) &&
          event.target.className !== 'menuIcon' &&
          !navbar.querySelector('.linkMenu.open .links').contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Set up the event listener only if the menu is open
    if (isMobileMenuOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts or when the menu is closed
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <ScrolledDiv className="navbar">
      <div className="loko">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1 className="lokoText">AutoHeaven</h1>
      </div>
      <div ref={mobileMenuRef} className={`linkMenu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="menuIcon" onClick={handleMobileMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="links">
          <Link className="linkMenuItem">Etusivu</Link>
          <Link className="linkMenuItem">Tieto</Link>
          <Link className="linkMenuItem">Autopesut</Link>
          <Link className="linkMenuItem">Tuotteet</Link>
          <Link className="linkMenuItem">Ota yhteyttä</Link>
        </div>
      </div>
    </ScrolledDiv>
  );
};

export default Navbar2;
