import React from "react";
import "./AgentBox.css";
import { AiOutlineUserAdd } from "react-icons/ai";

const AgentBox = ({ action }) => {
  return (
    <>
      <div
        className="agent_box"
        // className={`agent_box ${action ? "active" : ""}`}
      >
        <div className="agent_box_header">
          <p>Teams</p>
        </div>
        <div className="agent_box_body">
          <ul>
            <li> Team One</li>
          </ul>
        </div>
        <div className="agent_add">
          <a href="/">
            {" "}
            <AiOutlineUserAdd /> Add a Agent
          </a>
        </div>
      </div>
    </>
  );
};

export default AgentBox;
