import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Contact from './pages/Contact';


// Import layout components
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);
  return (
  <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
     </HelmetProvider>
  );
}

export default App;




