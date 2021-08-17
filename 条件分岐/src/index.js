import React from "react";
import ReactDOM from "react-dom";
const cb1 =document.querySelector("#check1");
cb1.addEventListener("change",(event)=>{
  const value = event.target.checked;
  const log = `サインインボックスの値は${value}になりました`;
  function UserGreeting(props){
    return <React.Fragment>
      <h1>Welcome back</h1>
      <h1>{log}</h1>
  </React.Fragment>
  }
  function GuestGreeting(props){
    return <React.Fragment>
      <h1>Please sign in</h1>
      <h1>{log}</h1>
  </React.Fragment>
  }
  function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  console.log(value);
  ReactDOM.render(
    <Greeting isLoggedIn={value} />,
    document.getElementById("root")
  );
})
const cb2 =document.querySelector("#check2");
cb2.addEventListener("change",(event)=>{
  const value = event.target.checked;
  const log = `ログアウトボックスの値は${value}になりました`;
  function UserGreeting(props){
    return <React.Fragment>
      <h1>Please sign in</h1>
      <h1>{log}</h1>
  </React.Fragment>
  }
  function GuestGreeting(props){
    return <React.Fragment>
      <h1>Please sign in</h1>
      <h1>{log}</h1>
  </React.Fragment>
  }
  function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  console.log(value);
  ReactDOM.render(
    <Greeting isLoggedIn={value} />,
    document.getElementById("root")
  );
})


