import React from "react";
import style from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
};
