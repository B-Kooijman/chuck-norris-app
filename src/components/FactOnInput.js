import { useState } from "react";
import Result from "./Result";
import StatusMessage from "./StatusMessage";
import useFetch from "../hooks/useFetch";

const FactOnInput = () => {
  const [searchText, setSearchText] = useState();
  const { result, loading, error } = useFetch(searchText);

  function inputHandler(event) {
    if (event.target?.value?.length > 2) {
      setSearchText(event.target.value);
    }
  }

  return (
    <>
      {result && <Result {...result} />}
      <input
        type="search"
        placeholder="Give me a fact about"
        onChange={inputHandler}
      />
      <StatusMessage loading={loading} error={error} />
    </>
  );
};

export default FactOnInput;
