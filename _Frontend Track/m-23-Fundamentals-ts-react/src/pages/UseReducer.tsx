import React, {  useReducer } from "react";

type TAction = {
    type : string;
    payload : string;
}
const initialState = { name: "", email: "" };

const reducer = (currentState : typeof initialState, action : TAction) => {
  switch (action.type) {
    case "addName":
      return {...currentState, name: action.payload};

      case "addEmail":
        return {...currentState, email: action.payload};
  
    default:
      return currentState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(state);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          className="border p-2 m-2 rounded"
          onChange={(e)=>dispatch({type: 'addName', payload : e.target.value})}
        />
        <input
          type="text"
          name="email"
          id="email"
          className="border p-2 m-2 rounded"
          onChange={(e)=>dispatch({type: 'addEmail', payload : e.target.value})}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseReducer;
