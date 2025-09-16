import './Navbar.css';
import { useEffect, useState } from "react";

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
                <a href="/" className='nav-button'>Home</a>
                <a href="/timetable" className="nav-button">Timetable</a>
                <a href="/homework" className="nav-button">Assignments</a>
                <a href="/about" className="nav-button">About</a>

                <div className="right-section">
                    <div className="time">{time}</div>
                    <button onClick={toggleDropdown} className="dropdown">≡</button>                    
                    {isOpen && (
                        <div className='dropdown-menu'>
                            <a href="/">Home</a>
                            <a href="/timetable">Timetable</a>
                            <a href="/homework">Assignments</a>
                            <a href="/about">About</a>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    );
}

export default Navbar;