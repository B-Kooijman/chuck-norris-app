import { useState, useEffect } from "react";

const url = "https://api.chucknorris.io/jokes/random";

async function getFact() {
  const result = await fetch(url)
    .then((response) => response.json())
    .then((response) => response);

  return result;
}

const RandomFactWithDefaultFact = () => {
  const [fact, setFact] = useState("This is a default value");

  useEffect(() => {
    getFact().then((response) => setFact(response.value));
  }, []);

  return (
    <div>
      <p>{fact}</p>
      <button
        onClick={() => getFact().then((response) => setFact(response.value))}
      >
        Not funny, another one!
      </button>
    </div>
  );
};

export default RandomFactWithDefaultFact;
