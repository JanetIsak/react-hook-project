import logo from './logo.svg';
import './App.css';
import Color from "./components/colorComponent/color";
import Counter from "./components/counterComponent/counter";
import Input from "./components/inputComponent/input";

function App() {
  return (
    <div className="App">
        <Color/>
        <hr/>
        <Counter/>
        <hr/>
        <Input/>
    </div>
  );
}

export default App;
