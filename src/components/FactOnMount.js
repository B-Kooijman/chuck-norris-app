import useFetch from "../hooks/useFetch";
import config from "../config";

const FactOnMount = () => {
  const { result, loading, error } = useFetch(config.randomFactUrl);

  return (
    <div>
      {result && <p> {result.value}</p>}
      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}
    </div>
  );
};

export default FactOnMount;
