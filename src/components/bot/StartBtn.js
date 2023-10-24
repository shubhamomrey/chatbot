import React from "react";

export default function StartBtn(props) {
  const initialAction = () => {
    props.actions.initialAction();
  };

  return (
    <div className="start-div">
      <button className="start-btn" onClick={() => initialAction()}>
        Got it!
      </button>
    </div>
  );
}
