import Navbar from './Componenets/navbar/navbar';
import Landing from './Componenets/landing/landing';
import About from './Componenets/About/About';
import Autopesut from './Componenets/Autopesut/Autopesut';
import Tuotteet from './Componenets/Tuotteet_osio/Tuotteet';
import Contacts from './Componenets/Contacts/Contacts';
import Footer from './Componenets/Footer/Footer';



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Landing/>
      <About/>
      {/*<Autopesut/>
      <Tuotteet/>
      <Contacts/>
      <Footer/> */}
    </div>
  );
}

export default App;