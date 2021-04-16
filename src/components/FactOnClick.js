import { useState } from "react";
import Result from "./Result";
import StatusMessage from "./StatusMessage";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";

const url = config.randomFactUrl + "sport";

const FactOnClick = () => {
  const [count, setCount] = useState(0);

  // three states, use a state enum!
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function clickHandler() {
    setCount(count + 1);
    setLoading(true);
    await fetchResult(url)
      .then((response) => setResult(response))
      .catch(() => {
        console.log(error); 
        setError(true)})
      .finally(() => setLoading(false));
  }

  return (
    <>
      {result && <Result {...result} />}
      <button onClick={clickHandler}>Not funny, another one!</button>
      <br />
      {count > 0 && <strong> you clicked {count} times </strong>}
      <StatusMessage loading={loading} error={error} />
    </>
  );
};

export default FactOnClick;
