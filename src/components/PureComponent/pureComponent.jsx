import React, { PureComponent } from "react";

class PureComponentExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Pure Component", this.props.arr);
    // return <h2>Pure Component: {this.props.message}</h2>;
    return (
      <h1>
        Pure:
        {this.props.arr.map((val) => (
          <span>{`${val} `}</span>
        ))}
      </h1>
    );
  }
}

export default PureComponentExample;
