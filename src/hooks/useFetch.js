import { useEffect, useRef, useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";

const baseUrl = config.randomFactUrl;
const defaultUrl = baseUrl + "food";

const useFetch = (category) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const isMounted = useRef(false);
  const url = category ? baseUrl + category : defaultUrl;

  useEffect(() => {
    isMounted.current = true;

    const getResult = async () => {
      setLoading(true);
      setError();
      setTimeout(async () => {

      await fetchResult(url)
        .then((response) => {
          if (isMounted.current) {
            setResult(response);
        }
      })
        .catch((error) => {
          if (isMounted.current) {
            setResult();
            setError(error.message);
          }
        })
        .finally(() => {
          if (isMounted.current) {
            setError();
            setLoading(false);
          }
        });
      }, 5000)
    };

      getResult();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { result, loading, error };
};

export default useFetch;
