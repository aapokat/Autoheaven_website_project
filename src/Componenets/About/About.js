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
               <p>Laatu</p>
               </div>
               <div className="box-33">
               <p>Nopeus</p>
               </div>
               <div className="box-33">
               <p>Toimipaikat</p>
               </div>
               </div>
           </div>
        </div>
     );
}
 
export default About;