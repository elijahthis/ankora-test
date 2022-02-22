import React from "react";
import { AddAppointmentBadge } from "./badges";

const GridBox = ({ date, doc, ind, handleOpenModal, scheduleList }) => {
  console.log(scheduleList);
  //   if (scheduleList.length !== 0) {
  //     console.log(JSON.parse(scheduleList[4]["from-time"]).hour);
  //   }
  return (
    <div className="grid-box">
      {scheduleList.map((appointment) => {
        if (
          appointment["from-date"] === date.toISOString().substring(0, 10) &&
          JSON.parse(appointment["from-time"]).hour === ind &&
          scheduleList.length !== 0 &&
          appointment.doctor === doc["short-name"]
        ) {
          return <p>{doc["short-name"]}</p>;
        }
      })}
      <AddAppointmentBadge
        handleOpenModal={() => {
          handleOpenModal();
        }}
      />
    </div>
  );
};

export default GridBox;
