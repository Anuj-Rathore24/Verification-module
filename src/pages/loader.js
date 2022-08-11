import React from "react";
import "../styles/loader.css";

const Spinner = (props) => {
  return (
    <>
      <span className="loader" style={{display:props.setDisplay}}></span>
    </>
  );
};

export default Spinner;
