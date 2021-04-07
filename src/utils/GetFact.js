import { useState } from "react";

const url = "https://api.chucknorris.io/jokes/random";

export async function GetNewFact() {
  const [fact, setFact] = useState();

  await fetch(url)
    .then((response) => response.json())
    .then((response) => setFact(response.value));

  return fact;
}
