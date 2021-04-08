import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import FactOnClick from "./components/FactOnClick";
import FactOnInput from "./components/FactOnInput";
import FactOnSubmit from "./components/FactOnSubmit";
import FactOnMount from "./components/FactOnMount";
import FactOnInterval from "./components/FactOnInterval";
import FactWithDefaultFact from "./components/FactWithDefaultFact";

export default function App() {
  return (
    <div className="App">
      <nav className="">
        <ul>
          <li>
            <Link to="/">On Click</Link>
          </li>
          <li>
            <Link to="/oninput">On Input</Link>
          </li>
          <li>
            <Link to="/onsubmit">On Submit</Link>
          </li>
          <li>
            <Link to="/onmount">On Mount</Link>
          </li>

          <li>
            <Link to="/oninterval">On Interval</Link>
          </li>
          <li>
            <Link to="/withdefault">with Default</Link>
          </li>
        </ul>
      </nav>

      <h1>Tell me about Chuck Norris</h1>
      <Switch>
        <Route exact path="/" component={FactOnClick} />
        <Route path="/oninput" component={FactOnInput} />
        <Route path="/onsubmit" component={FactOnSubmit} />
        <Route path="/onmount" component={FactOnMount} />
        <Route path="/withdefault" component={FactWithDefaultFact} />
        <Route path="/oninterval" component={FactOnInterval} />
      </Switch>
    </div>
  );
}
