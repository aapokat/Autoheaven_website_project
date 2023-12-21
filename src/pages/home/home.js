

import Navbar from '../../Componenets/navbar/navbar';
import Landing from '../../Componenets/landing/landing';
import About from '../../Componenets/About/About';
import Autopesut from '../../Componenets/Autopesut/Autopesut';
import Tuotteet from '../../Componenets/Tuotteet_osio/Tuotteet';
import Contacts from '../../Componenets/Contacts/Contacts';
import Footer from '../../Componenets/Footer/Footer';

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return (

    <>
    <Navbar/>
    <Landing id="landing-section" />
    <About id="about-section" />
    <Autopesut id="autopesut-section" />
    <Tuotteet id="tuotteet-section" />
    <Contacts id="contacts-section" scrollToTop={scrollToTop} />
    <Footer/>
    </>

    );
}

export default Home;