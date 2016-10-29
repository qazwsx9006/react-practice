import React from 'react';
import ReactDOM from 'react-dom';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.state = {
      value: 'Type some word.',
    }
  }

  handleChange(e) {
    // e.target.value
    this.setState({value: this.refs.textarea_ref.value});
  }

  rawMarkup(e) {
    const md = new Remarkable();
    return {__html: md.render(this.state.value)};
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea_ref"
          defaultValue={this.state.value}
          placeholder="Type here plz!"
        >
        </textarea>
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    )
  }

}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app'));