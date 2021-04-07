import { useState } from "react";

const url = "https://api.chucknorris.io/jokes/random";

const RandomFact = () => {
  const [fact, setFact] = useState("This is a default value");

  async function getFact() {
    await fetch(url)
      .then((response) => response.json())
      .then((response) => setFact(response.value));
  }

  return (
    <div>
      <p>{fact}</p>
      <button onClick={() => getFact()}>Not funny, another one!</button>
    </div>
  );
};

export default RandomFact;
