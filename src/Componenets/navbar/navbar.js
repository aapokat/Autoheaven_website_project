import React, { useState, useEffect } from "react";
import './navbar.css';
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

const Navbar = () => {
  return (
    <ScrolledDiv className="navbar">
      <div className="loko">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1 className="lokoText">AutoHeaven</h1>
      </div>
      <div className="linkMenu">
        <Link className="linkMenuItem">Etusivu</Link>
        <Link className="linkMenuItem">Tieto</Link>
        <Link className="linkMenuItem">Autopesut</Link>
        <Link className="linkMenuItem">Tuotteet</Link>
        <Link className="linkMenuItem">Ota yhteyttä</Link>
      </div>
    </ScrolledDiv>
  );
};

export default Navbar;