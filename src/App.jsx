import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Options from "./components/Options";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Portfolio />
              <Options />
              <Footer />
            </>
          }  
        />
        <Route path="/sobre-mim" element={<AboutMe/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
