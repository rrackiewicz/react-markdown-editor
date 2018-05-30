import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      htmlToDisplay: ''
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
    let html = this.converter.makeHtml(markdown)
    this.setState({htmlToDisplay: html})
    return Promise.resolve(html)
  }

  render() {
    return (
      <div>
        <ReactMde
        onChange={this.handleChange}
        editorState={this.state.editorState}
        generateMarkdownPreview={this.markdownPreview}
        layout='vertical'
      />
      <hr />
      <h5>Dangerously Set HTML:</h5>
      <div dangerouslySetInnerHTML={{__html: this.state.htmlToDisplay}}></div> 
      </div> 
    );
  }
}
