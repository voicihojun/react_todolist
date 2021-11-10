import "./App.css";
import Clock from "./Clock/Clock";
import Login from "./Login/Login";
import TodoList from "./TodoList/TodoList";
import Weather from "./Weather/Weather";
import Quote from "./Quote/Quote";

function App() {
  return (
    <div className="App">
      <div id="todo-container">
        <Clock />
        <Login />
        <TodoList />
        <Weather />
        <Quote />
      </div>
    </div>
  );
}

export default App;
