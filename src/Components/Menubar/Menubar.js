import React from "react";
import "./Menubar.css";

const Menubar = ({ country,count }) => {
  return (
    <div className="mt-5">
      {/* <h1>MD.HAMID HOSEN AZAD</h1>
      <h4>{country}</h4>
      <Test country={country}></Test> */}

      <div className="container">
        <div className="row">
          <div className="col-md-2 p-2" style={{ fontWeight: "bold" }}>
            L O G O
          </div>
          <div className="col-md-10 menu-container d-flex justify-content-end">
            <li className="items me-4 p-2">H O M E</li>
            <li className="items me-4 p-2"> C O N T A C T</li>
            <li className="items me-4 p-2"> C A R T <sup>{count}</sup></li>
            <li className="items me-4 p-2"> L O G I N</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;