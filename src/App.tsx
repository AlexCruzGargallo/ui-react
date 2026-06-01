import { Button, Input } from "../lib/main";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Input placeholder="Type something..." />
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </div>
    </>
  );
}

export default App;
