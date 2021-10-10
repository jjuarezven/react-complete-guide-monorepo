import React, { useReducer } from "react";
import { loginUser } from "./utils";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value
      };
    case "login":
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case "success":
      return {
        ...state,
        isLoggedIn: true
      };
    case "error":
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoading: false,
        username: "",
        password: ""
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: ""
      };
    default:
      break;
  }
  return state;
};

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: ""
};

export default function Login() {
  /* const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); */

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    /* setError("");
    showLoader(true); */
    dispatch({ type: "login" });

    try {
      await loginUser({ username, password });
      //setIsLoggedIn(true);
      dispatch({ type: "success" });
    } catch (error) {
      /* setError("Incorrect username or password!");
      showLoader(false);
      setUsername("");
      setPassword(""); */
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logout" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value
                })
              }
              /* onChange={(e) => setUsername(e.currentTarget.value)} */
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value
                })
              }
              /* onChange={(e) => setPassword(e.currentTarget.value)} */
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
