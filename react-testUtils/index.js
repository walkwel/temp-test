import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };

    this.plusOne = this.plusOne.bind(this);
  }

  plusOne() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <button onClick={this.plusOne}>{this.state.count}</button>
    );
  }
}
