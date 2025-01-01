import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <div className="container">
          {/* Render different page components based on the route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
