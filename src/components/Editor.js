import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    });
    this.handleChange = this.handleChange.bind(this);
    this.markdownPreview = this.markdownPreview.bind(this);
  }

  handleChange(editorState) {
    this.setState({ editorState });
  }
  markdownPreview(markdown) {
    return Promise.resolve(this.converter.makeHtml(markdown))
  }

  render() {
    return (
      <ReactMde
        onChange={this.handleChange}
        editorState={this.state.editorState}
        generateMarkdownPreview={this.markdownPreview}
      />
    );
  }
}
