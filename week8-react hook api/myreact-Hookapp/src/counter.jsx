import { useState } from "react";
import "./App.css";

//define a function named ClickCounter to set up a component that uses the useState hook.
function ClickCounter() {
  const [count, setCount] = useState(0);
  //declare a useState hook to create a state variable called count and a function setCount to manage.

  //define a function named ClickHandle that will increment count each time the button is clicked.
  const ClickHandle = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //inside the return statement, create a button.
  //set the onClick attribute to call the ClickHandle function
  //display the count variable inside the button text.

  return (
    //add a button with an onClick event that triggers ClickHandle.
    <div className="App-header">
      <h1> Click Count: {count} </h1>

      <button type="button" onClick={ClickHandle}>
        Clicked ({count}) times
      </button>
    </div>
  );
}

export default ClickCounter;
