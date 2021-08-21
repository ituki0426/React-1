import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Data from "./data.json";
import { set } from "lodash";
  var arr = [1,2,3,4];
  var a = arr.length;
 
//シャッフルアルゴリズム
while (a) {
    var j = Math.floor( Math.random() * a );
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
}
var suti = 0;
var tiems = 0;
/*const name = Data.data[0].id;*/
const button = document.getElementById("start");
function ButtonClick(){
  tiems = tiems + 1;
  console.log(tiems);
  const rundom = arr[tiems-1];
  document.getElementById("start").style.display ="none";
  const word = Data.data[rundom-1].name;
  console.log(word);
  if(tiems==4){
    suti = 1;
  }
  return <React.Fragment>
    <div>{word}</div>
    <div>
     <p>意味&nbsp; &nbsp;</p>
     <p>
     <input id="mytext" type="text"></input>
     </p>
    </div>
    <button onClick={()=>{Seikai()}}>確定</button>
       </React.Fragment>
}
button.addEventListener("click",function(e){
  ReactDOM.render(
    ButtonClick(),
    document.getElementById("root")
  )
});
function Next(){
  ReactDOM.render(
    ButtonClick(),
    document.getElementById("root")
  )
}
function Seikai(){
  const element1 = <React.Fragment>
    <p>正解です</p>
    <p>終了です</p>
  </React.Fragment>
  const elemt = <React.Fragment>
  <h1>正解です</h1>
  <button onClick={()=>{Next()}}>次</button>
</React.Fragment>
  if(suti==1){
    ReactDOM.render(
      element1,
      document.getElementById("root")
    )
  }else{
    ReactDOM.render(
      elemt,
      document.getElementById("root")
    )
  }
}
