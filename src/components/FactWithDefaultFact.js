import { useState, useEffect } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";

const FactWithDefaultFact = () => {
  const [fact, setFact] = useState("This is a default value");

  async function jokeHandler() {
    await fetchResult(config.randomFactUrl + "travel").then((response) =>
      setFact(response.value)
    );
  }

  useEffect(() => {
    jokeHandler();
  }, []);

  return (
    <div>
      <p>{fact}</p>
      <button onClick={jokeHandler}>Not funny, another one!</button>
    </div>
  );
};

export default FactWithDefaultFact;
