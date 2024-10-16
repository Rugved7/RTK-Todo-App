import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
// import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <>
      <div>
        <span>Hello , Please add a todo</span>
        <AddTodo />
        <Todos />
        {/* // <UpdateTodo />
        // */}
      </div>
    </>
  );
}

export default App;
