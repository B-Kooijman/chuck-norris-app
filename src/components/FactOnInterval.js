import { useEffect, useState } from "react";
import Result from "./Result";
import { fetchResult } from "../utils/fetchResult";

const FactOnInterval = () => {
  const [result, setResult] = useState("Jokes are incoming...");

  async function getFact() {
    await fetchResult().then((response) => setResult(response));
  }

  useEffect(() => {
    const interval = setInterval(getFact, 3000);
    return () => clearInterval(interval);
  }, []);

  return result ? <Result {...result} /> : null;
};

export default FactOnInterval;
