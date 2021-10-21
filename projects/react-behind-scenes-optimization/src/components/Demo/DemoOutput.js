import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(DemoOutput);

// in this case, React.memo works because props.show is primitive value and comparison between primitive values returns true
