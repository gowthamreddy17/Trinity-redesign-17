import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import HomePage
import About from './pages/About'; // Import HomePage
import Services from './pages/Services'; // Import HomePage
import Contact from './pages/Contact'; // Import HomePage
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the root route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* You can define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
