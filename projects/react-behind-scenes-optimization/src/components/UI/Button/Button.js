import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// in this case, React.memo does not work because props.onClick is reference value and comparison between reference values returns false
// in order to make React.memo to work, we need to use useCallback hook, in this case is being used on the component
// where the function (reference value) is defined: App.js
