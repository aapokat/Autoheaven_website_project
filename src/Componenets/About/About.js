import React from "react";
import './About.css'


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
               <h2>Laatu</h2>
               <p>Parasta laatua koko suomessa parhaalla hinnalla</p>
               <img className="kuva" src="/images/tieto1.jpg" alt="Laatu"></img>
               </div>
               <div className="box-33">
               <h2>Nopeus</h2>
               <p>Modernit pesulaitteet takaavat nopean palvelun</p>
               <img className="kuva" src="/images/tieto2.jpg" alt="Nopeus"></img>
               </div>
               <div className="box-33">
               <h2>Toimipaikat</h2>
               <p>AutoHeavenilla on toimipaikkoja ympäri suomen</p>
               <img className="kuva" src="/images/tieto3.jpg" alt="Toimipaikat"></img>
               </div>
               </div>
           </div>
        </div>
     );
}
 
export default About;