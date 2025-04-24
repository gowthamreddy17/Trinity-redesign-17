import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader'; // Import Loader

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {/* Suspense is used to wrap the entire Routes */}
      <Suspense
        fallback={<Loader />} // Show the loader while pages are loading
        onFinish={() => setLoading(false)}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage'; // Import HomePage
// import About from './pages/About'; // Import HomePage
// import Services from './pages/Services'; // Import HomePage
// import Contact from './pages/Contact'; // Import HomePage
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Define the root route */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* You can define other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
