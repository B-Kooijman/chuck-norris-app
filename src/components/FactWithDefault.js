import { useState, useEffect } from "react";
import Result from "./Result";
import { fetchResult } from "../utils/fetchResult";

const FactWithDefault = () => {
  const [result, setResult] = useState("This is a default value");

  async function clickHandler() {
    await fetchResult("sport").then((response) => setResult(response.value));
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

export default FactWithDefault;
