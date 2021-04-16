import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import FactOnClick from "./components/FactOnClick";
import FactOnInput from "./components/FactOnInput";
import FactOnSubmit from "./components/FactOnSubmit";
import FactOnMount from "./components/FactOnMount";
import FactOnInterval from "./components/FactOnInterval";
import FactWithDefault from "./components/FactWithDefault";
import FactOnToggle from "./components/FactOnToggle";

const NavLink = ({url, text}) => <li><Link to={url}>{text}</Link></li>
const routes = {
  onClick: "/",
  onInput: "/oninput",
  onSubmit: "/onsubmit",
  onMount: "/onmount",
  onInterval: "/oninterval",
  withDefault: "/withdefault",
  onUnmount: "/onunmount",
}

export default function App() {
const {onClick, onInput, onSubmit, onMount, onInterval, withDefault, onUnmount } = routes;

  return (
    <div className="App">
      <nav className="">
        <ul>
            <NavLink url={onClick} text="On Click" />
            <NavLink url={onInput} text="On Input" />
            <NavLink url={onSubmit} text="On Submit" />
            <NavLink url={onMount} text="On Mount" />
            <NavLink url={onInterval} text="On Interval" />
            <NavLink url={withDefault} text="With Default" />
            <NavLink url={onUnmount} text="On Unmount" />
        </ul>
      </nav>

      <h1>Tell me about Chuck Norris</h1>
      <Switch>
        <Route exact path={onClick} component={FactOnClick} />
        <Route path={onInput} component={FactOnInput} />
        <Route path={onSubmit} component={FactOnSubmit} />
        <Route path={onMount} component={FactOnMount} />
        <Route path={onInterval} component={FactWithDefault} />
        <Route path={withDefault} component={FactOnInterval} />
        <Route path={onUnmount} component={FactOnToggle} />
      </Switch>
    </div>
  );
}
