import "./App.css";
import { useState } from "react";
import SideBar from "./components/sideBar";
import Main from "./components/main";
// import AddAppointment from "./components/popups";

const App = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div className="App">
      <SideBar openSide={openSide} />
      <Main openSide={openSide} setOpenSide={setOpenSide} />
    </div>
  );
};

export default App;
