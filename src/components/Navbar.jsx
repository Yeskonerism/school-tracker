import './Navbar.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [time, setTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2,"0");
            const minutes = String(now.getMinutes()).padStart(2,"0");
            const seconds = String(now.getSeconds()).padStart(2,"0");
            
            const day = String(now.getDate()).padStart(2, "0");
            const month = String(now.getMonth() + 1).padStart(2, "0"); // +1 because Jan=0
            const year = now.getFullYear();

            setTime(`[ ${day}-${month}-${year} ] [ ${hours}:${minutes}:${seconds} ]`);
        }

        updateClock();
        const interval = setInterval(updateClock,1000);

        return() => clearInterval(interval);
    },[]);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="navigation">
                <Link to="/home" className='nav-button'>Home</Link>
                <Link to="/timetable" className="nav-button">Timetable</Link>
                <Link to="/homework" className="nav-button">Assignments</Link>
                <Link to="/about" className="nav-button">About</Link>

                <div className="right-section">
                    <div className="time">{time}</div>
                    <button onClick={toggleDropdown} className="dropdown">≡</button>                    
                    {isOpen && (
                        <div className='dropdown-menu'>
                            <Link to="/home">Home</Link>
                            <Link to="/timetable">Timetable</Link>
                            <Link to="/homework">Assignments</Link>
                            <Link to="/about">About</Link>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    );
}

export default Navbar;