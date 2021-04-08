import { useEffect, useState } from "react";
import { fetchResult } from "../utils/fetchResult";

const useFetch = (url, category = "food") => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      try {
        const endpoint = url + category;
        console.log(endpoint);
        await fetchResult(endpoint)
          .then((response) => {
            if (Array.isArray(response.result)) {
              console.log("kl", response.result[0]);
              setResult(response.result[0]);
            } else {
              setResult(response);
            }
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

  console.log("hello", result);
  return { result, loading, error };
};

export default useFetch;
