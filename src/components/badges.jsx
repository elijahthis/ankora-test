import { FiMoreVertical } from "react-icons/fi";
import ProfileImage from "./profileImg";
import "../css/badges.css";
import { GrAdd } from "react-icons/gr";

const DocBadge = ({ info }) => {
  return (
    <div className="doc-badge" style={{ backgroundColor: `${info["badge"]}` }}>
      <div>
        <ProfileImage imgUrl={`${info["pic"]}`} size={25} />
        <p>{info["short-name"]}</p>
      </div>
      <FiMoreVertical />
    </div>
  );
};

const PatientBadge = () => {
  return <div></div>;
};

const AddAppointmentBadge = ({ handleOpenModal }) => {
  return (
    <div className="addAppoint-badge" onClick={() => handleOpenModal()}>
      <p className="xs">Add a new appointment</p>
      <GrAdd />
    </div>
  );
};

export { DocBadge, PatientBadge, AddAppointmentBadge };
// export default DocBadge;
