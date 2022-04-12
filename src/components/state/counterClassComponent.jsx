import React, { Component } from "react";

class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showSomething: false,
    };
    this.timerId = null;
  }

  componentDidMount() {
    console.log("F-1 Component Did Mount");
    this.timerId = setInterval(() => {
      console.log("F-1  I'm a Subcription");
    }, 1500);
    console.log("INterval-Id", this.timerId);
  }

  componentDidUpdate() {
    console.log("F-1 Component Did Update");
    // if (this.state.counter === 1 && !this.state.showSomething) {
    //   this.setState({
    //     showSomething: true,
    //   });
    // }
  }

  componentWillUnmount() {
    console.log("F-1 Component Will Unmount");
    clearInterval(this.timerId);
  }

  handleIncrement = () => {
    const upDateCounter = this.state.counter + 1;
    this.setState({
      counter: upDateCounter,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter} </h1>
        {this.state.showSomething ? <h3>Welcome</h3> : <h3> Bye</h3>}
        <button onClick={this.handleIncrement}>Click </button>
      </div>
    );
  }
}

export default CounterClassComponent;
