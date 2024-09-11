import React, {useEffect, useReducer } from "react";

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const dataReducer = (state, action) => {

  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
};

function App() {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: FETCH_INIT });
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: FETCH_SUCCESS, payload: data.joke });
      } catch (error) {
        dispatch({ type: FETCH_FAILURE });
      } 
    };
    fetchData();
  }, []);
  
  return (
    <div>
     {state.isLoading ? (
      <div>Loading...</div>
     ) : state.isError ? (
      <div>Error fetching data</div>
     ) : (
      <div>
        <pre>{state.data}</pre>
      </div>
    )
    }
    </div>
  );
}

export default App;

