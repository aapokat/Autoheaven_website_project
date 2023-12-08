import React from "react";
import { Link } from 'react-scroll';
import './footer.css';
import Ig from '../assets/instagram.png';
import Face from '../assets/facebook-icon.png';
import Twitter from '../assets/twitter.png';
import Phone from '../assets/phoneIcon.png';
import Email from '../assets/email_Icon.png';
import House from '../assets/hous_Icon.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="socials">
                <div className="paragraph">Ole aina ajantasalla meidän someissa!</div>
                <div className="socialBtns">
                    <img src={Ig} alt="Instagram Icon" className="socialImg" />
                    <img src={Face} alt="Facebook Icon" className="socialImg" />
                    <img src={Twitter} alt="Twitter Icon" className="socialImg" />
                </div>
            </div>
            <div className="footerDownSection">
                <div className="infoSection">
                    <h1 className="sectionHeadline">AutoHeaven</h1>
                    <p className="sectionInfoText">AutoHeaven on kahden nuoren miehen <br /> perustama autonpesu yritys jolla on <br /> suuret tavoitteet tulevaisuudessa</p>
                </div>
                <div className="navSection">
                    <h1 className="sectionHeadline">Siirry sivulla</h1>
                    <Link className="navLink">Sivun alkuun</Link>
                    <Link className="navLink">About</Link>
                    <Link className="navLink">Autopesut</Link>
                    <Link className="navLink">Tuotteet</Link>
                    <Link className="navLink">Ota yhteyttä</Link>
                </div>
                <div className="addresSection">
                    <h1 className="sectionHeadline">Yhteystiedot</h1>
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={House} alt="Osoite Icon" />
                        <p className="osoite">Mikonkatu 17 00100 Helsinki Finland</p>
                    </div>
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={Email} alt="Sähköposti Icon" />
                        <p className="email">Office@Autoheaven.fi</p>
                    </div>
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={Phone} alt="Puhelin Icon" />
                        <p className="puhNro">0600 90 211</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyrightText">© 2023 Copyright: AutoHeaven</p>
            </div>
        </div>
     );
}
 
export default Footer;