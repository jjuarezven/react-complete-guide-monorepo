import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // evaluates on every keystroke
  const [enteredName, setEnteredName] = useState("");
  // direct reference to input control
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(nameInputRef.current.value);

    // reset control
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
