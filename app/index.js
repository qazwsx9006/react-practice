import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: 'mingyu',
      i: 0
    }
  }

  handleClick(e) {
    // e.target.value
    this.setState({name: 'Ming Yu', i: this.state.i+1});
  }

  componentWillMount(e) {
    console.log('will mount');
    console.log(this.state);
  }

  componentDidMount(e) {
    console.log('did mount');
    console.log(this.state);
  }

  componentWillReceiveProps(e) {
    console.log('component will receive props');
  }

  componentWillUpdate(e) {
    console.log('componentWillUpdate');
    console.log(this.state);
  }
  componentDidUpdate(e) {
    console.log('componentDidUpdate');
    console.log(this.state);
  }
  componentWillUnmount(e) {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state);
    console.log(nextState);
    console.log('update check');
    console.log(this.state);
    return this.state.i > 4;
    // return nextProps.id !== this.props.id;
  }



  render() {
    return (
      <div>
        <h3 className='hell2' data-hello='123'>Input</h3>
        <h4>{this.state.name}</h4>
        <div onClick={this.handleClick}>Click</div>
      </div>
    )
  }

}

ReactDOM.render(<MyComponent />, document.getElementById('app'));