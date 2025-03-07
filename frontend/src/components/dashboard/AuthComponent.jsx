import { useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: (() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  })(),
  loading: false,
  error: null,
};

const AuthReducer = (state, action) => {
  switch (action?.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      
      return {
        user: null, 
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const AuthComponent = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    try {
      localStorage?.setItem("user", JSON.stringify(state?.user));
    } catch (error) {
      console.error("Failed to update user in localStorage:", error);
    }
  }, [state.user]);

  return (
    <div>
      {children({
        user: state?.user,
        loading: state?.loading,
        error: state?.error,
        dispatch,
      })}
    </div>
  );
};

export default AuthComponent;