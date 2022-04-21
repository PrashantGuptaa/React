import React, { Component } from "react";

class RegularComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Regular Component", this.props.arr);
    // return <h2>Regular Component: {this.props.message}</h2>;
    return (
      <h1>
          Regular:
        {this.props.arr.map((val) => (
          <span>{`${val} `}</span>
        ))}
      </h1>
    );
  }
}

export default RegularComponent;
