import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { ...state, value: action.value };
  }
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }
  if (action.type === "RESET") {
    return { ...initialInputState };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  /* const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); */

  /* const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched; */
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    //setIsTouched(true);
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    /* setEnteredValue("");
    setIsTouched(""); */
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value, //enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
