import React from "react";
import './1_Tuote.css'


const Tuote1 = () => {
    return ( 
        <div className="Tuote1">
            <div className="tuotecontainer">
                <div className="tuotekuvasäilö">
                    <img className="kuvatuote123" src="/images/korrekpro.jpg"></img>
                </div>
                <div className="tuoteesittely">
                    <h1 className="tuote1otsikko">Korrek Pro TFC Polymatrix pinnoite 350 ml</h1>
                    <p className="tuote1teksti">Korrek Pro TFC Polymatrix on keraaminen pinnoite todella helppoon ja nopeaan 
                    omatoimiseen autonhoitoon. SiO2-pohjainen keraaminen pinnoite antaa autolle
                    loistavan kiillon sekä suojan likaa ja UV-säteitä vastaan. Polymatrix-pinnoite 
                    muodostaa erittäin kestävän ja vettähylkivän suojan maali-, kumi-, muovi-, 
                    alumiini- ja kromipinnoille jopa kuudeksi kuukaudeksi. Pinnoite tekee auton 
                    pesemisestä helppoa, koska lika irtoaa pinnoilta vaivattomasti.</p>
                    <div className="hintasaatavuus">
                        <p className="hintatext">23.99€</p>
                        <p className="saatavuustext">Saatavuus:</p>
                        <div className="saatavuuscontainer">
                            <div className="saatavuustilanne">
                            </div>
                            <div className="saatavuustextcont">
                                <p className="saatavuustext">
                                Oulu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
     );
}
 
export default Tuote1;