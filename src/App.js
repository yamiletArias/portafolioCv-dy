import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FloatingParticles from "./components/FloatingParticles";
import ExperienceDetail from "./components/ExperienceDetail";
import "./App.css";

// Pagina principal separada en su propio componente
const MainPage = ({ isDark, toggleTheme }) => (
  <div className="App">
    <FloatingParticles />
    <Header isDark={isDark} toggleTheme={toggleTheme} />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  </div>
);

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={<MainPage isDark={isDark} toggleTheme={toggleTheme} />}
        />
        {/* Ruta de detalle de experiencia */}
        <Route path="/experience/:id" element={<ExperienceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;