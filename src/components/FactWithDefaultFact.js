import { useState, useEffect } from "react";
import Result from "./Result";
import { fetchResult } from "../utils/fetchResult";

const FactWithDefaultFact = () => {
  const [result, setResult] = useState("This is a default value");

  async function clickHandler() {
    await fetchResult().then((response) => setResult(response.value));
  }

  useEffect(() => {
    clickHandler();
  }, []);

  return (
    <>
      {result && <Result {...result} />}
      <button onClick={clickHandler}>Not funny, another one!</button>
    </>
  );
};

export default FactWithDefaultFact;
