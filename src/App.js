import "./App.css";

import Header from "./components/Header/Header.component";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Feature from "./components/Feature/Feature.component";
import Gallery from "./components/Gallery/Gallery.component";
import Trailer from "./components/ContentTrailer/Trailer.component";
import Jumbotron from "./components/Jumbotron/Jumbotron.component";
import Faq from "./components/Faq/Faq.component";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Trailer />
      <Feature />
      <Jumbotron />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
