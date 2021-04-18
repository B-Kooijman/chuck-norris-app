import { useEffect, useState } from "react";
import Result from "../_shared/Result";
import { fetchResult } from "../../utils/fetchResult";
import config from "../../config";

const url = config.randomFactUrl + "food";

const FactOnInterval = () => {
  const [result, setResult] = useState("Jokes are incoming...");

  async function getFact() {
    await fetchResult(url).then((response) => setResult(response));
  }

  useEffect(() => {
    const interval = setInterval(getFact, 3000);
    return () => clearInterval(interval);
  }, []);

  return result ? <Result {...result} /> : null;
};

export default FactOnInterval;