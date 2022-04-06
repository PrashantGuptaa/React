import React from 'react';
import './welcome.css';

const styleObj = {
    backgroundColor: 'green'
}
class WelcomeClass extends React.Component {
    render() {
        return <h1 className='welcome' style={styleObj} >Welcome Class Component</h1>
    }
}

export default WelcomeClass;