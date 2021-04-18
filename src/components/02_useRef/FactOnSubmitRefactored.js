import { useState, useRef } from "react";
import StatusMessageRefactored from "../_shared/StatusMessageRefactored";
import useFetchRefactored from "../../hooks/useFetchRefactored"

const FactOnSubmitRefactored = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState();
  const { result, status } = useFetchRefactored(inputRef.current?.value);
  const submitHandler = () => setSearchText(inputRef.current?.value);

  return (
    <div className="box">
      <input ref={inputRef} />
      <button onClick={submitHandler}>Search for category</button>
      <StatusMessageRefactored result={result} status={status} />
      {searchText && <p>you searched for:{inputRef.current.value}</p>}
    </div>
  );
};

export default FactOnSubmitRefactored;
