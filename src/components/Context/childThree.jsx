import React from "react";
import { Institute, MyName } from "../../App";

const ChildThree = () => {
  return (
    <MyName.Consumer>
      {(name) => {
        return (
          <Institute.Consumer>
            {(ins) => {
              return (
                <h3>
                  My name is {name} - {ins}
                </h3>
              );
            }}
          </Institute.Consumer>
        );
      }}
    </MyName.Consumer>
  );
};

export default ChildThree;
