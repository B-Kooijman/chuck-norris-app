import { useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";
// import useFetch from "../hooks/useFetch";

const FactOnClick = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function clickHandler() {
    setCount(count + 1);
    setLoading(true);
    try {
      await fetchResult(config.randomFactUrl + "food")
        .then((response) => setResult(response))
        .finally(() => setLoading(false));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  // function clickHandler() {
  //   setCount(count + 1);
  // }
  // const { result, loading, error } = useFetch(config.randomJokeUrl, count);

  return (
    <div>
      {result && <p>{result.value}</p>}
      {error && error}
      <button onClick={clickHandler}>Not funny, another one!</button>
      <br />
      {count > 0 && <strong> you clicked {count} times </strong>}
      <br />
      {loading && <strong>Aan het laden..</strong>}
    </div>
  );
};

export default FactOnClick;
