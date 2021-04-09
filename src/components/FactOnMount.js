import Result from "./Result";
import StatusMessage from "./StatusMessage";
import useFetch from "../hooks/useFetch";
import config from "../config";

const FactOnMount = () => {
  const { result, loading, error } = useFetch(config.randomFactUrl);

  return (
    <>
      {result && <Result {...result} />}
      <StatusMessage loading={loading} error={error} />
    </>
  );
};

export default FactOnMount;
