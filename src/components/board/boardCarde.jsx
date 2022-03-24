import React from "react";
import OIcon from "../../icons/o-icon";
import XIcon from "../../icons/x-icon";

const BoardCarde = ({user = "nouser", index, active}) => {
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${!active && "shadow-gray"}`}
    >
      {user === "x" && <XIcon/>}
      {user === "o" && <OIcon/>}
    </div>
  );
};
export default BoardCarde;
