import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";

// useState
import FactOnToggle from "./components/00_useState/01_FactOnToggle";
import FactOnLikes from "./components/00_useState/02_FactOnLikes";
import LiftingState from "./components/00_useState/03_LiftingState";
import DerivedState from "./components/00_useState/04_DerivedState";
import MultipleStates from "./components/00_useState/05_MultipleStates";
import StateEnum from "./components/00_useState/06_StateEnum";
import CustomHook from "./components/00_useState/07_CustomHook";
import LazyInitializer from "./components/00_useState/08_LazyInitializer";

// useRef
import FactOnSubmit from "./components/02_useRef/FactOnSubmit";
import FactOnSubmitRefactored from "./components/02_useRef/FactOnSubmitRefactored";

import FactOnInput from "./components/FactOnInput";
import FactOnMount from "./components/FactOnMount";
import FactOnInterval from "./components/01_useEffect/FactOnInterval";
import FactWithDefault from "./components/01_useEffect/FactWithDefault";
import FactOnUnmount from "./components/02_useRef/FactOnUnmount";

const NavLink = ({url, text}) => <li><Link to={url}>{text}</Link></li>
const routes = {
  onToggle: "/ontoggle",
  onLikes: "/onlikes",
  liftingState: "/liftingstate",
  derivedState: "/derivedstate",
  multipleStates: "/multiplestates",
  stateEnum: "/stateenum",
  customHook: "/customhook",
  lazyInitializer: "/lazyinitializer",
  onInput: "/oninput",
  onSubmit: "/onsubmit",
  onMount: "/onmount",
  onInterval: "/oninterval",
  withDefault: "/withdefault",
  onUnmount: "/onunmount",
}

export default function App() {
const {onToggle, onLikes, liftingState, derivedState, multipleStates, stateEnum, customHook, lazyInitializer, onInput, onSubmit, onMount, onInterval, withDefault, onUnmount } = routes;

  return (
    <div className="App">
      <nav className="">
        <ul>
            <NavLink url={onToggle} text="On Toggle" />
            <NavLink url={onLikes} text="On Likes" />
            <NavLink url={liftingState} text="Lifting State" />
            <NavLink url={derivedState} text="Derived State" />
            <NavLink url={multipleStates} text="Multiple States" />
            <NavLink url={stateEnum} text="State Enum" />
            <NavLink url={customHook} text="Custom Hook" />
            <NavLink url={lazyInitializer} text="Lazy Initializer" />
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
        <Route exact path={onToggle} component={FactOnToggle} />
        <Route path={onLikes} component={FactOnLikes} />
        <Route path={liftingState} component={LiftingState} />
        <Route path={derivedState} component={DerivedState} />
        <Route path={multipleStates} component={MultipleStates} />
        <Route path={stateEnum} component={StateEnum} />
        <Route path={customHook} component={CustomHook} />
        <Route path={lazyInitializer} component={LazyInitializer} />
        <Route path={onInput} component={FactOnInput} />
        <Route path={onSubmit} component={FactOnSubmitRefactored} />
        <Route path={onMount} component={FactOnMount} />
        <Route path={onInterval} component={FactWithDefault} />
        <Route path={withDefault} component={FactOnInterval} />
        <Route path={onUnmount} component={FactOnUnmount} />
      </Switch>
    </div>
  );
}
