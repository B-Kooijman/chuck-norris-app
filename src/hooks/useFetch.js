import { useEffect, useState } from "react";
import { fetchResult } from "../utils/fetchResult";

// defaults to food.
const useFetch = (url, category) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      setError();
      try {
        const endpoint = url + category;
        console.log(endpoint);
        await fetchResult(endpoint)
          .then((response) => {
            console.log(response);
            setResult(response);
          })
          .finally(() => {
            setError();
            setLoading(false);
          });
      } catch (error) {
        setResult();
        setError(error.message);
      }
    };
    getResult();
  }, [url, category]);

  return { result, loading, error };
};

export default useFetch;
