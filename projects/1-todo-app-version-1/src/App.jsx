import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import Todoitem1 from "./componets/TodoItem1";
import Todoitem2 from "./componets/TodoItem2";
import "./App.css";

function App(){
  return  <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="item-container">
    <Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2>
    </div>
     
  </center>
}
export default App;
