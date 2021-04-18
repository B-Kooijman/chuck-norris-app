import Result from "./_shared/Result";
import StatusMessage from "./_shared/StatusMessage";
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
