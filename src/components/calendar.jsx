import { useEffect, useState, useContext } from "react";
import Modal from "react-modal";

import { DateContext } from "../contexts/dateContext";
import { DocBadge} from "./badges";
import AddAppointment from "./popups";
import GridBox from "./gridBox";
import "../css/calendar.css";

const Calendar = () => {
  const { state } = useContext(DateContext);
  const [docList, setDocList] = useState([]);
  const [patientList, setPatientList] = useState([]);
  const [checkupList, setCheckupList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const fetchData = async (signal) => {
    await fetch("JSON/doctors.json", {
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDocList(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.log(err);
        }
      });

    await fetch("JSON/patients.json", {
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientList(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.log(err);
        }
      });

    await fetch("JSON/checkups.json", {
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCheckupList(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      className="cols"
      style={{
        gridTemplateColumns: `135px 1fr`,
      }}
    >
      <Modal
        isOpen={openModal}
        portalClassName="add-appointment-modal"
        ariaHideApp={false}
      >
        <AddAppointment
          checkupList={checkupList}
          docList={docList}
          patientList={patientList}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
          handleOpenModal={() => {
            setOpenModal(false);
          }}
        />
      </Modal>
      <div>
        {Array(24)
          .fill()
          .map((i, ind) => {
            const time = state.date;
            time.setHours(ind);
            time.setMinutes(30);
            return (
              <div key={ind}>{`${
                0 <= time.getHours() && time.getHours() < 13
                  ? time.getHours() || 12
                  : time.getHours() - 12
              }:${time.getMinutes()} ${
                0 <= time.getHours() && time.getHours() < 12 ? "am" : "pm"
              }`}</div>
            );
          })}
      </div>
      <section
        style={{
          gridTemplateColumns: `repeat(${docList.length}, minmax(220px, 1fr))`,
        }}
      >
        {/* <div></div> */}
        {docList.map((doc) => (
          <div key={doc.id}>
            <div className="docList-row-item">
              <DocBadge info={doc} />
            </div>
            {Array(24)
              .fill()
              .map((i, ind) => {
                const time = state.date;
                time.setHours(ind);
                time.setMinutes(30);
                return (
                  <GridBox
                    doc={doc}
                    date={state.date}
                    ind={ind}
                    scheduleList={scheduleList}
                    handleOpenModal={() => {
                      setOpenModal(true);
                    }}
                  />
                );
              })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Calendar;
