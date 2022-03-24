import React from "react";
import OIcon from "../../icons/o-icon";
import XIcon from "../../icons/x-icon";

const Win = () => {
  return (
    <div className="score">
      <p>yoy win!</p>
      <h3 className="score__title">
        <XIcon />
      {/*<OIcon />*/}
        Takes the round
      </h3>
      <h3 className="score__title text-yellow">No Winner !</h3>
      <div className="score__btns">
        <button className="btn btn-sm">Quit</button>
        <button className="btn btn-sm btn-yellow">Next Round</button>
      </div>
    </div>
  );
};

export default Win;
