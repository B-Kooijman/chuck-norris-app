import { useState, useRef } from "react";
import Result from "../_shared/Result";
import StatusMessage from "../_shared/StatusMessage";
import useFetch from "../../hooks/useFetch";

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
      <input ref={inputRef} />
      <button type="submit" onClick={submitHandler}>
        Search for category
      </button>

      {status === "success" && <Result {...result} />}
      {status === "loading" && <strong>Loading.. </strong>}
      {status === "error" && <strong>Something went wrong</strong>}

      {searchText && <p>you searched for:{inputRef.current.value}</p>}
      <StatusMessage loading={loading} error={error} />
    </div>
  );
};

export default FactOnSubmit;
