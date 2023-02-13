import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./calendarHeader.scss";

const CalendarHeader = ({ value, setValue }) => {
  const currentMonth = () => {
    return value.format("MMMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  };

  return (
    <div className="header">
      <div className="top-header">
        {thisMonth() ? (
          <ArrowBackIosIcon
            sx={{ visibility: "hidden" }}
            onClick={() => !thisMonth() && setValue(prevMonth())}
          />
        ) : (
          <ArrowBackIosIcon
            sx={{ color: "white", cursor: "pointer" }}
            onClick={() => !thisMonth() && setValue(prevMonth())}
          />
        )}

        <div>
          {currentMonth()} {currentYear()}
        </div>
        <ArrowForwardIosIcon
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => setValue(nextMonth())}
        />
      </div>
    </div>
  );
};

export default CalendarHeader;
