import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    count: 0
  }

  increment = (e) => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  decrement = (e) => {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  }

  render() {
    return (
      <div>
        {this.renderControls()}
        <section>
          <h1>My Awesome Counter!</h1>
          <p>Counters are an integral part of counting things!</p>
        </section>
      </div>
    )
  }

  renderControls = () => {
    const { count } = this.state;
    return (
      <section>
        <button onClick={this.decrement}>-</button>
        <span>{count}</span>
        <button onClick={this.increment}>+</button>
      </section>
    );
  }
}
