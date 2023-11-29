import React from "react";
import './contacts.css';
import mailImg from '../assets/mail_Img.png';


const Contacts = () => {
    return ( 
        <div className="contact">
            <div className="textSection">
                <img src={mailImg} alt="letterImage" />
                <p className="textHeadline">Ota Yhteyttä</p>
                <p className="text">Lähetä meille viestiä jos on kysyttävää</p>
                <button className="palaaBtn">Palaa alkuun</button>
            </div>
            <div className="formSection">
                <p className="formHeadline">Lähetä viesti</p>
                <div className="form">
                    <input label="Etunimi" type="text" className="first" />
                    <input label="Sukunimi" type="text" className="last" />
                    <input label="Email" type="text" className="email" />
                    <input label="Puhelinnumero" type="text" className="Puh" />
                    <input label="Viesti" type="text" className="viesti" />
                </div>
                <button className="sendBtn">Lähetä</button>
            </div>
        </div>
     );
}
 
export default Contacts;