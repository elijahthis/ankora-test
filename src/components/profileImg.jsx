import React from "react";
import logo from "../images/logo.svg";

const ProfileImage = ({ imgUrl, size }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    overflow: "hidden",
  };
  return (
    <div className="img-cropper" style={styles}>
      <img
        src={imgUrl}
        style={{ display: "block", width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default ProfileImage;
