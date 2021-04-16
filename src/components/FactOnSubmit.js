import { useState, useRef } from "react";
import Result from "./Result";
import StatusMessage from "./StatusMessage";
import useFetch from "../hooks/useFetch";

const FactOnSubmit = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState();
  const { result, loading, error } = useFetch(inputRef.current?.value);

  // why do we need useState?
  const submitHandler = () => setSearchText(inputRef.current?.value);

  //1. try to pass ref value to useFetch as argument
  //2. try with useEffect with ref as dependency
  //3. try to log value after click.

  return (
    <div className="box">
      {result && <Result {...result} />}
      <input ref={inputRef} />
      <button type="submit" onClick={submitHandler}>
        Search for category
      </button>
      {searchText && <p>you searched for:{inputRef.current.value}</p>}
      <StatusMessage loading={loading} error={error} />
    </div>
  );
};

export default FactOnSubmit;
