import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Options from "./components/Options";
import AboutMe from "./components/AboutMe";
import Certificate from "./components/Certificate";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
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
        <Route path="/tecnologias" element={<Stacks/>} />
        <Route path="/certificado" element={<Certificate/>} />
        <Route path="/projetos" element={<Projects/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
