import './Class.css';
import { useEffect, useState } from 'react';

function Class() {
  const [todayClasses, setTodayClasses] = useState([]);

  useEffect(() => {
    fetch('/school-tracker//classes.json')
      .then(res => res.json())
      .then(data => {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const today = days[new Date().getDay()];
        setTodayClasses(data[today] || []);
      });
  }, []);

  return (
    <div>
      <h2>Today's Classes</h2>
      {todayClasses.length === 0 ? (
        <div>No classes today.</div>
      ) : (
        todayClasses.map(cls => (
          <div key={cls.id} className="class-widget">
            <div className="class-name">{cls.name}</div>
            <div className="class-details">
              <div className="class-time">{cls["time-start"]} - {cls["time-end"]}</div>
              <div className="class-room">{cls.room}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Class;