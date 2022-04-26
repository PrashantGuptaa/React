import React, { useState } from "react";

const IncrementCounterHoc = (Comp) => {
  /*
  class AddedCounterFunc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    handleChange = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    render() {
      return (
        <Comp
          name="Prashant"
          counter={this.state.counter}
          handleChange={this.handleChange}
        />
      );
    }
  }
*/
  
// Functional Version
  const AddedCounterFunc = () => {
    const [counter, setCounter] = useState(0);
    return (
      <Comp
        name="Prashant"
        counter={counter}
        handleChange={() => setCounter(counter + 1)}
      /> 
    );
  };

  return AddedCounterFunc;
};

export default IncrementCounterHoc;
