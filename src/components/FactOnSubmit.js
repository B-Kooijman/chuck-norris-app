import { useState, useRef } from "react";
import config from "../config";
import useFetch from "../hooks/useFetch";

const FactOnSubmit = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState();
  const { result, loading, error } = useFetch(config.randomFactUrl, searchText);

  // We still need useState to trigger a rerender!
  const submitHandler = () => setSearchText(inputRef.current?.value);

  return (
    <div>
      {console.log("jk", result)}
      {result && <p>{result.value}</p>}
      <input ref={inputRef} />
      <button type="submit" onClick={submitHandler}>
        Search for fact
      </button>
      <br />
      {searchText && <p>you searched for:{inputRef.current.value}</p>}
      <br />
      {loading && <strong>Aan het laden..</strong>}
      {error && error}
    </div>
  );
};

export default FactOnSubmit;
