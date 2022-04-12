import logo from './logo.svg';
import './App.css';
import {Todo} from "./components/Todo"

function App() {
  return (
    <div className="App">
      <h1 style={{color:"white"}}>My TodoList</h1>
    <Todo />
    </div>
  );
}

export default App;
