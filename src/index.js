import React from "react";
import ReactDOM from "react-dom";
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
const element = <Form/>
ReactDOM.render(
  element,
  document.getElementById("root")
);