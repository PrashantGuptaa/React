import './App.css';
import PropsFunc from './components/props/propFunc';
import React, { useState } from 'react';
import { cloneDeep } from 'lodash';

const arr = [10, 20, 40, 60, 80, 100];

const myList = [
  {
    label: 'Apple',
    price: 0,
  },
  {
    label: 'Banana',
    price: 20
  }, {
    label: 'Custurd',
    price: 5
  }
];

function App() {
  const [counterArr, setCounterArr] = useState(myList);

  const handleIncrement = (index) => {
    // const copyCountArr = cloneDeep(counterArr);
    const copyCountArr = [...counterArr];
    copyCountArr[index].price = copyCountArr[index].price + 10;
    setCounterArr(copyCountArr);
  }

  return (
    <h1 className="App">
      {
        counterArr.map((obj, i) => {
          const { label, price } = obj;
          return (
            <PropsFunc
            label={label}
            counter={price}
            handleIncrement={handleIncrement}
            index={i}
            />
          )
        })
      }
    </h1>
  );
}

export default App;
