import React from "react";
import ReactDOM from "react-dom";
function ListData() { 
  return (
    <React.Fragment>
      <li>イチゴ</li>
      <li>あおい</li>
      <li>らん</li>
    </React.Fragment>
  );
 }
 ReactDOM.render(
   <ListData />,
   document.getElementById("root"),
 );