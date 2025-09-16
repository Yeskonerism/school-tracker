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
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <Navbar />
      <Routes>
        {/* redirect on startup */}
        <Route path="/" element={<Navigate to="/home"/>}></Route>

        <Route path="/home" element={<Home />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App