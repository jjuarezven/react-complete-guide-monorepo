import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // evaluates on every keystroke
  const [enteredName, setEnteredName] = useState("");
  // direct reference to input control
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

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

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
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
