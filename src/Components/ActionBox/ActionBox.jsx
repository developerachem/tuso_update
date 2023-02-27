import React from "react";
import "./ActionBox.css";

const ActionBox = ({ action }) => {
  return (
    <div className={`list_action_box`}>
      <p>Status</p>
      <button>
        {" "}
        <span></span> On Hold
      </button>
      <button>
        {" "}
        <span></span> Closed
      </button>
    </div>
  );
};

export default ActionBox;
