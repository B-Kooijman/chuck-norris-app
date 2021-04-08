import { useState } from "react";
import config from "../config";
import useFetch from "../hooks/useFetch";

const FactOnInput = () => {
  const [searchText, setSearchText] = useState();
  const { result, loading, error } = useFetch(config.randomFactUrl, searchText);

  function inputHandler(event) {
    if (event.target?.value?.length > 2) {
      setSearchText(event.target.value);
    }
  }

  return (
    <div>
      {result && <p>{result.value}</p>}
      {error && error}

      <input
        type="search"
        placeholder="Give me a fact about"
        onChange={inputHandler}
      />

      {loading && <p>Aan het laden..</p>}
      {/* <button type="submit" onClick={clickHandler}>
        Search for fact
      </button> */}
      <br />
    </div>
  );
};

export default FactOnInput;
