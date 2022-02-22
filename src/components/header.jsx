import React, { useContext } from "react";
import { DateContext } from "../contexts/dateContext";
import "../css/header.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const Header = () => {
  const { state, dispatchDate } = useContext(DateContext);

  const printDate = (date) =>
    date.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      {/* date: {state.date}; */}
      <header>
        <div>
          <div
            className="chev-div"
            onClick={() => {
              dispatchDate({ type: "decrement" });
            }}
          >
            <BiChevronLeft />
          </div>
          <div
            className="chev-div"
            onClick={() => {
              dispatchDate({ type: "increment" });
            }}
          >
            <BiChevronRight />
          </div>
          <h3 className="m">
            <span style={{ color: "#282828" }}>{printDate(state.date)}</span>
            <span>Today</span>
          </h3>
        </div>
        <div className="day-week">
          <div className="xs">Day</div>
          <div className="xs">Week</div>
        </div>
      </header>
    </>
  );
};

export default Header;
