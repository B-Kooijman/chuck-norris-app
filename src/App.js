import "./styles.css";
import RandomFact from "./components/RandomFact";
import RandomFactOnTime from "./components/RandomFactOnTime";
import RandomFactWithDefaultFact from "./components/RandomFactWithDefaultFact";

export default function App() {
  return (
    <div className="App">
      <h1>Tell me about Chuck Norris</h1>
      <RandomFact />
      {/* <RandomFactWithDefaultFact /> */}
      {/* <RandomFactOnTime /> */}
    </div>
  );
}
