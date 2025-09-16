// pages (works with Router)
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import Homework from './pages/Homework';
import About from './pages/About'

// components
import Navbar from './components/Navbar';

// style wabam
import './index.css';

// react dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <><Navbar /><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router></>
  );
}

export default App