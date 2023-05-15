import "./index.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
