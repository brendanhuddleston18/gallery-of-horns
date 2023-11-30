import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import beasts from './assets/beasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  
  const [display, setDisplay] = useState('none');

  function handleClick(){
    console.log('hello world');
  }


  return(
    <div>
      <Header />
      <Gallery beasts={beasts} state={display} handleClick={handleClick}/>
      <Footer />
    </div>
  )
}

export default App;
