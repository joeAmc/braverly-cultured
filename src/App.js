import "./index.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import OurWhy from "./pages/OurWhy";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>BravelyCultured</title>
        <meta
          name="description"
          content="website for braverly cultured, finding answers to today's food production problems "
        />
        <meta
          name="keywords"
          content="microbiome, braverly, precision, fermentation, "
        />
      </Helmet>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/our_why?" exact element={<OurWhy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
