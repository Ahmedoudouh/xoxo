import React from "react";
import OIcon from "../../icons/o-icon";
import XIcon from "../../icons/x-icon";

const Start = () => {
  return (
    <div className="start">
      <div className="start__header">
      <XIcon/>
      <OIcon/>
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players">
          <span className="start__players--active">
            <XIcon color="dark"/>
          </span>
          <span>
            <OIcon color="light"/>
          </span>
        </div>
        <p className="text-light text-normal">remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow">new game (vs CPU)</button>
        <button className="btn btn-blue">new game (vs Player)</button>
      </div>
    </div>
  );
};

export default Start;
