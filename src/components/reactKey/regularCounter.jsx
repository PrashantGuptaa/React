import React from 'react';

const IncrementCounter = (props) => {
    console.log("Increment Component Rendered F-1")
    return ( 
        <div>
            <h1>{props.value} </h1>
        </div>
     );
}
 
export default IncrementCounter;