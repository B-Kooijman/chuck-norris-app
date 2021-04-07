import { useEffect, useState } from "react";

const url = "https://api.chucknorris.io/jokes/random";

const RandomFactOnTime = () => {
  const [fact, setFact] = useState();

  async function getFact() {
    await fetch(url)
      .then((response) => response.json())
      .then((response) => setFact(response.value));
  }

  useEffect(() => {
    const interval = setInterval(getFact, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{fact}</p>
    </div>
  );
};

export default RandomFactOnTime;
