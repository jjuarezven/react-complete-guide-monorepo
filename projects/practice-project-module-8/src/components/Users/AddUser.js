import React, { useState, useRef } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import style from "./AddUser.module.css";
import User from "../Models/User";
import ErrorModal from "../UI/ErrorModal.js";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (executeValidations()) {
      props.onAddUser(
        new User(
          Math.random().toString(),
          nameInputRef.current.value,
          ageInputRef.current.value
        )
      );
      resetInputs();
      setError(null);
    } else {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age"
      });
    }
  };

  const executeValidations = () => {
    return (
      nameInputRef.current.value.trim().length > 0 &&
      ageInputRef.current.value.trim().length > 0 &&
      +ageInputRef.current.value >= 0
    );
  };

  const resetInputs = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const onConfirm = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirm}
        />
      )}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
