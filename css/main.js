// 謎の定義
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mixStyles = function(){
  var res = {};
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i]) Object.assign(res, arguments[i]);
  }
  return res;
}

// スタイルを定義
const Styles = {
  bgRed: {
    backgroundColor: "red",
  },
  bgBlue: {
    backgroundColor: "blue",
  },
  fontSize16: {
    fontSize: "16px",
  },
  fontSize20: {
    fontSize: "20px",
  }
}

// スタイル適用
class StyleComponent extends React.Component {
  render() {
    return (
      <div>
        <p style={mixStyles(Styles.bgRed, Styles.fontSize16)}>背景：赤,文字サイズ：16</p>
        <p style={mixStyles(Styles.bgRed, Styles.fontSize20)}>背景：赤,文字サイズ：20</p>
      </div>
    )
  }
}

export default ListComponent;


