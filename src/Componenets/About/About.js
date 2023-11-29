import React from "react";
import './About.css'
import NopeusImg from '../assets/nopeus_img.jpg';
import ToimipaikatImg from '../assets/toimipaikat_img.jpg';
import LaatuImg from '../assets/laatu_img.jpg';



const About = () => {
    return ( 
        <div className="about">
            <div className="bigcontainer">
               <div className="otsikkocontainer">
                    <h1 className="otsikko">Autopesu edullisesti moderneilla
                    ja tehokkailla autopesukoneilla</h1>
               </div>
               <div className="otsikkocontainer2">
               <h1 className="otsikko">Miksi Valita AutoHeaven?</h1>
               </div>
               <div className="three-container">
               <div className="box-33">
                <div className="desc">
                <h2>Laatu</h2>
               <p>Parasta laatua koko suomessa parhaalla hinnalla</p>
               </div>
               <img className="kuva" src={LaatuImg} alt="Laatu"></img>
               </div>
               <div className="box-33">
               <div className="desc">
               <h2>Nopeus</h2>
               <p>Modernit pesulaitteet takaavat nopean palvelun</p>
               </div>
               <img className="kuva" src={NopeusImg} alt="Nopeus"></img>
               </div>
               <div className="box-33">
               <div className="desc">
               <h2>Toimipaikat</h2>
               <p>AutoHeavenilla on toimipaikkoja ympäri suomen</p>
               </div>
               <img className="kuva" src={ToimipaikatImg} alt="Toimipaikat"></img>
               </div>
               </div>
           </div>
        </div>
     );
}
 
export default About;