import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";

function App() {
  return (
    <div>
      <h1>Robofriends</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
