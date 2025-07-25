import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RaindropBackground from './pages/RaindropBackground';
import NavBar from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <>
      <NavBar onNavigate={handleNavigate} />
      <RaindropBackground />
      <main className="main-content pt-16">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home onNavigate={handleNavigate} />
                <Footer onNavigate={handleNavigate} />
              </>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <>
                <Projects />
                <Footer onNavigate={handleNavigate} />
              </>
            } 
          />
          <Route 
            path="/events" 
            element={
              <>
                <Events />
                <Footer onNavigate={handleNavigate} />
              </>
            } 
          />
          <Route 
            path="/about" 
            element={
              <>
                <About />
                <Footer onNavigate={handleNavigate} />
              </>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <>
                <Contact />
                <Footer onNavigate={handleNavigate} />
              </>
            } 
          />
        </Routes>
      </main>
    </>
  );
}

export default App;