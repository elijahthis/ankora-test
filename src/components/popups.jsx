import { useState } from "react";
import "../css/main.css";
import "../css/popups.css";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const generateTimes = () => {
  let timeList = [];
  Array(24)
    .fill()
    .forEach((i, ind) => {
      if (ind < 12) {
        const hour = ind;
        let min = 0;
        let text = (hour || 12) + ":00 am";
        timeList.push({ hour, min, text });
        min = 30;
        text = (hour || 12) + ":30 am";
        timeList.push({ hour, min, text });
      } else {
        const hour = ind;
        let min = 0;
        let text = (hour - 12 || 12) + ":00 pm";
        timeList.push({ hour, min, text });
        min = 30;
        text = (hour - 12 || 12) + ":30 pm";
        timeList.push({ hour, min, text });
      }
    });
  return timeList;
};
const convDate = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const dateObj = new Date(year, month - 1, day);
  return dateObj.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const AddAppointment = ({
  checkupList,
  docList,
  patientList,
  scheduleList,
  setScheduleList,
  handleOpenModal,
}) => {
  const [fromDate, setFromDate] = useState("01 January 2022");
  const [toDate, setToDate] = useState("01 January 2022");
  const timeList = generateTimes();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let data = new FormData(ev.target);
    const value = Object.fromEntries(data.entries());
    setScheduleList([...scheduleList, value]);
    // console.log(scheduleList);
    handleOpenModal();
  };
  const changeFrom = (ev) => {
    setFromDate(convDate(ev.target.value));
  };
  const changeTo = (ev) => {
    setToDate(convDate(ev.target.value));
  };

  return (
    <div>
      <form
        id="add-appointment-form"
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <div>
          <h3>Add Appointment</h3>
          <div
            onClick={() => {
              handleOpenModal();
            }}
          >
            <GrClose size={10} />
          </div>
        </div>
        <div>
          <label htmlFor="type" className="s">
            Type
          </label>
          <select name="type" id="type" defaultValue={checkupList[1].tag}>
            {checkupList.map((item, ind) => (
              <option value={`${item.tag}`} key={ind}>{`${item.type}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="from-date-time" className="s">
            From
          </label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="date-time-input">
              <p>{fromDate}</p>
              <span>
                <input
                  type="date"
                  name="from-date"
                  onChange={(ev) => {
                    changeFrom(ev);
                  }}
                  required
                />
                <BsFillCalendar2EventFill size={15} />
              </span>
            </div>
            <select
              name="from-time"
              id=""
              className="date-time-input"
              defaultValue={JSON.stringify(timeList[0])}
            >
              {timeList.map((timeObj, ind) => (
                <option value={JSON.stringify(timeObj)} key={ind}>
                  {timeObj.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="to-date-time" className="s">
            To
          </label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="date-time-input">
              <p>{toDate}</p>
              <span>
                <input
                  type="date"
                  name="to-date"
                  onChange={(ev) => {
                    changeTo(ev);
                  }}
                  required
                />
                <BsFillCalendar2EventFill size={15} />
              </span>
            </div>
            <select
              name="to-time"
              id=""
              className="date-time-input"
              defaultValue={JSON.stringify(timeList[1])}
            >
              {timeList.map((timeObj, ind) => (
                <option value={JSON.stringify(timeObj)} key={ind}>
                  {timeObj.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="patient" className="s">
            Attach Patient
          </label>
          <select name="patient">
            {patientList.map((item, ind) => (
              <option
                value={`${item["short-name"]}`}
                key={ind}
              >{`${item["short-name"]}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="doctor" className="s">
            Attending Physician
          </label>
          <select name="doctor">
            {docList.map((item, ind) => (
              <option
                value={`${item["short-name"]}`}
                key={ind}
              >{`${item["short-name"]}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="notes" className="s">
            Notes
          </label>
          <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddAppointment;
