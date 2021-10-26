import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // evaluates on every keystroke
  const [enteredName, setEnteredName] = useState("");
  // direct reference to input control
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (formIsValid()) {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (!formIsValid()) {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (formIsValid()) {
      console.log(enteredName);
      console.log(nameInputRef.current.value);

      // reset control
      setEnteredName("");
      setEnteredNameIsValid(true);
    } else {
      setEnteredNameIsValid(false);
    }
  };

  const formIsValid = () => {
    return !(enteredName.trim() === "");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className={"error-text"}>Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
