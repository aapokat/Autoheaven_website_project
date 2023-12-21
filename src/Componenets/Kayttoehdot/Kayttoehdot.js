import React from 'react';

import './Kayttoehdot.css';

const Kayttoehdot = () => {
    return ( 
        <div className="ehdot">
            <h1 className="HeadlineEhdot">AutoHeaven käyttöehdot</h1>
            <div className="ehot">
                    <p className="paraEhdot">
                    YLEISTÄ <br />
                    Tämä verkkosivusto on AutoHeaven omistuksessa ja ylläpitämä. Käyttämällä tätä verkkosivustoa hyväksyt seuraavat käyttöehdot kokonaisuudessaan. Mikäli et hyväksy näitä ehtoja, älä käytä tätä verkkosivustoa. <br />
                    <br /><br />
                    SIVUSTON TARKOITUS <br />
                    Tämä verkkosivusto tarjoaa tietoa AutoHeaven toiminnasta ja palveluista. Sivustolla voi myös olla yhteydenottolomake, jonka avulla voit ottaa yhteyttä meihin. <br />
                    <br /><br />
                    VASTUUNRAJOITUS<br />
                    Emme takaa verkkosivuston tietojen täydellisyyttä tai tarkkuutta. AutoHeaven ei ole vastuussa mistään vahingoista tai menetyksistä, jotka johtuvat sivuston käytöstä. <br />
                    <br /><br />
                    YHTEYDENOTTOLOMAKE <br />
                    Käyttäessäsi yhteydenottolomaketta sitoudut antamaan totuudenmukaiset ja ajantasaiset tiedot. AutoHeaven käsittelee antamiasi tietoja tietosuojaselosteemme mukaisesti.<br />
                    <br /><br />
                    LINKIN KOLMANNEN OSAPUOLTEN SIVUILLE<br />
                    Sivustomme saattaa sisältää linkkejä kolmansien osapuolten sivustoille. AutoHeaven ei ole vastuussa näiden sivustojen sisällöstä tai toiminnasta.<br />
                    <br /><br />
                    MUUTOKSET KÄYTTÖEHTOIHIN<br />
                    Pidätämme oikeuden muuttaa näitä käyttöehtoja ilman erillistä ilmoitusta. Käyttäjän vastuulla on tarkistaa ehdot säännöllisesti muutosten varalta.<br />
                    <br /><br />
                    SOVELLETTAVA LAKI<br />
                    Näitä käyttöehtoja hallitsee Suomen lainsäädäntö. Kaikkiin näihin ehtoihin liittyvät riidat pyritään ratkaisemaan sovinnollisesti, ja mikäli se ei ole mahdollista, riidat käsitellään Oulun käräjäoikeudessa.<br />
                    </p>
            </div>
        </div>
     );
}
 
export default Kayttoehdot;