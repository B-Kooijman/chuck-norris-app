import { useEffect, useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";

const FactOnInterval = () => {
  const [fact, setFact] = useState("Jokes are incoming...");

  async function getFact() {
    await fetchResult(config.randomFactUrl + "sport").then((response) =>
      setFact(response.value)
    );
  }

  useEffect(() => {
    const interval = setInterval(getFact, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{fact}</p>
    </div>
  );
};

export default FactOnInterval;
