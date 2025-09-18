import './Timetable.css';

import Class from '../components/Class';

import { use, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Timetable() {
    const [date, setDate] = useState("");

    useEffect(() => {
        function updateDate() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, "0");
            const month = String(now.getMonth() + 1).padStart(2, "0"); // +1 because Jan=0
            const year = now.getFullYear();

            setDate(`${day}-${month}-${year}`);
        }

        updateDate();
    },[]);

    return(
        <>
            <div className='timetable'>
                <div className='container'>
                    <div className='timetable-title'>Timetable | {date}</div>

                    {
                        Array.from({ length: 1 }).map((_, i) => (
                            <Class key={i} name="Math" time="09:00 - 11:00" room="TQ-2043A"/>
                        ))
                    }

                    {/* about section - todo: figure out how to make a parent do this and use it on every page (possible?) */}
                    <div className="about">
                        <div className="author">
                            Created by Oliver Hughes.
                        </div>
                        <a href="https://github.com/Yeskonerism" className="github"> GitHub</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timetable;