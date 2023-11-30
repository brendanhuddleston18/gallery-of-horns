import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import SelectedBeasts from "./components/SelectedBeasts/SelectedBeasts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import beasts from "./assets/beasts.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [display, setDisplay] = useState(false);
  const [selectedBeast, setBeasts] = useState(null);

  function selectBeasts(choice) {
    setBeasts(choice);
    console.log(choice);
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
      <Header />
      <Gallery
        beasts={beasts}
        showModal={showModal}
        selectBeasts={selectBeasts}
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
