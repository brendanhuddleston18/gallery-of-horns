import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import HornForm from "./components/Form/Form.jsx";
import FormModal from "./components/Form/FormModal.jsx"
import Gallery from "./components/Gallery/Gallery.jsx";
import SelectedBeasts from "./components/SelectedBeasts/SelectedBeasts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import beasts from "./assets/beasts.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [display, setDisplay] = useState(false);
  const [selectedBeast, setBeasts] = useState(null);
  const [filterHorns, setFilterHorns] = useState(null);
    
  function handleFilter(id){
    let filterResults = (id);
    let beastsShown = beasts.filter(beast => beast.horns === filterResults );
    setFilterHorns(beastsShown);
    console.log(beastsShown);
  }

  function resetFilter(){
    setFilterHorns(null);
  }

  function selectBeasts(choice) {
    setBeasts(choice);
  }

  function showModal() {
    console.log("hello world");
    setDisplay(true);
  }

  function hideModal() {
    setDisplay(false);
  }

  return (
    <div>
      <Header 
      handleFilter={handleFilter}
      resetFilter={resetFilter}
      />
      
        
      <Gallery
        beasts={beasts}
        showModal={showModal}
        selectBeasts={selectBeasts}
        filterHorns={filterHorns}
      />
      <SelectedBeasts
        className="selectedBeast"
        display={display}
        hideModal={hideModal}
        selectedBeast={selectedBeast}
      />
      <Footer />
    </div>
  );
}

export default App;
