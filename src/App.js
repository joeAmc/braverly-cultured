import "./index.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" exact element={<Team />} />
        {/* <Route path="/rings" element={<RingsPage />} />
        <Route path="/earrings" element={<EarringsPage />} />
        <Route path="/necklaces" element={<NecklacesPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
