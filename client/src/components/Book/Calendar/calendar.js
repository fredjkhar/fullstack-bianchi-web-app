import React, { useState, useEffect } from "react";
import buildCalendar from "./buildCalendar";
import dayStyles, { beforeToday } from "./styles";

import "./calendar.scss";
import Header from "./calendarHeader";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);



  return (
    <div className="calendar">
      <Header value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((day) => (
            <div className="week">{day}</div>
          ))}
        </div>
        {calendar.map(week => (
          <div>
            {week.map(day => (
              <div
                key={week + day}
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)}>{day.format("D")}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
