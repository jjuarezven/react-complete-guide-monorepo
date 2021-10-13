import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  /*
useImperativeHandle y forwardRef es una manera de proveer funcionalidad desde un componente a otro sin necesidad de usar props
React components hide their implementation details, including their rendered output. Other components using FancyButton usually 
will not need to obtain a ref to the inner button DOM element. This is good because it prevents components from relying on each 
other’s DOM structure too much.
Although such encapsulation is desirable for application-level components like FeedStory or Comment, it can be inconvenient for 
highly reusable “leaf” components like FancyButton or MyTextInput. These components tend to be used throughout the application 
in a similar manner as a regular DOM button and input, and accessing their DOM nodes may be unavoidable for managing focus, 
selection, or animations.

Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down 
(in other words, “forward” it) to a child.
*/
  useImperativeHandle(ref, () => {
    return { focus: activate };
  });

  return (
    <>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </>
  );
});

export default Input;
