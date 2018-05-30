import React, { Component } from "react";
import Editor from "./components/Editor";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Markdown Editor Example</h3>
        <Editor />
      </div>
    );
  }
}
