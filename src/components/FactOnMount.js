import Result from "./Result";
import StatusMessage from "./StatusMessage";
import useFetch from "../hooks/useFetch";

const FactOnMount = () => {
  const { result, loading, error } = useFetch("food");

  return (
    <>
      {result && <Result {...result} />}
      <StatusMessage loading={loading} error={error} />
    </>
  );
};

export default FactOnMount;
