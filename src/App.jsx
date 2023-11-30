import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import beasts from './assets/beasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  const [display, setDisplay] = useState('none');
 

  function showModal(){
    console.log('hello world'); 
    setDisplay('inline-block');
  }

  function hideModal(){
    setDisplay('none')
  }


  return(
    <div>
      <Header />
      <Gallery beasts={beasts} display={display} hideModal={hideModal}showModal={showModal}/>
      <Footer />
    </div>
  )
}

export default App;
