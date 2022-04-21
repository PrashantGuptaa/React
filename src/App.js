import "./App.css";
import React from "react";
import RegularComponent from "./components/PureComponent/regularComponent";
import PureComponentExample from "./components/PureComponent/pureComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // msg: "Hello",
      arr: [10, 20, 30],
    };
  }

  componentDidMount() {
    //   setInterval(() => {
    //     this.setState({
    //       msg: "Hello",
    //     });
    //   }, 2000);

    setInterval(() => {
      const val = Math.round(10 * Math.random());
      // this.state.arr.push(val);
      const updatedArr = [...this.state.arr];
      updatedArr.push(val);
      this.setState({
        arr: updatedArr,
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component");
    return (
      <div className="App">
        <h1>
          Parent:
          {this.state.arr.map((val) => (
            <span>{`${val} `}</span>
          ))}
        </h1>
        <RegularComponent arr={this.state.arr} />
        <PureComponentExample arr={this.state.arr} />
      </div>
    );
  }
}

export default App;
