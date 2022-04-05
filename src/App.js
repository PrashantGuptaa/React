import './App.css';
import WelcomeClass from './components/welcomeClass';
import WelcomeFunctionalComponent from './components/welcomeFunctional';

function App() {
  return (
    <h1 className="App">
     Draw
    <WelcomeFunctionalComponent />
    {/* <WelcomeClass />
    <WelcomeFunctionalComponent />
    <WelcomeClass /> */}
    </h1>
  );
}

export default App;
