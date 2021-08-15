import React from "react";
function App(){
  return(
    <MyComponent title="react" />
  )
}
function MyComponent(props){
  return(
    <h1>Hello {props.title}!</h1>
  )
}
export default App;
