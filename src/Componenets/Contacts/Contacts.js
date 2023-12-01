import React from "react";
import './contacts.css';
import mailImg from '../assets/mail_Img.png';


const Contacts = () => {
    return ( 
        <div className="contact">
            <div className="textSection">
                <img src={mailImg} alt="letterImage" />
                <p className="textHeadline">Ota Yhteyttä</p>
                <p className="text">Lähetä meille viestiä jos on kysyttävää <br /> ja jotain lisätekstiä tähän koska tää on <br /> niin tyhjä</p>
                <button className="palaaBtn">Palaa alkuun</button>
            </div>
            <form className="formSection">
                <p className="formHeadline">Lähetä viesti</p>
                <div className="form">
                    <div className="formRow">
                        <input label="Etunimi" type="text" className="first" />
                        <input label="Sukunimi" type="text" className="last" />
                    </div>
                    <div className="formRow">
                        <input label="Email" type="text" className="email" />
                        <input label="Puhelinnumero" type="text" className="Puh" />
                    </div>
                    <div className="formRowBtn">
                        <input label="Viesti" type="text" className="viesti" />
                    </div>
                </div>
                <button className="sendBtn">Lähetä</button>
            </form>
        </div>
     );
}
 
export default Contacts;