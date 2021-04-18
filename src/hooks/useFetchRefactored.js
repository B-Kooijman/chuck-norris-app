import { useEffect, useRef, useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";
import useView from "./useView";

const baseUrl = config.randomFactUrl;
const defaultUrl = baseUrl + "food";

const useFetchRefactored = (category) => {
  const [result, setResult] = useState();
  const [status, { setSuccessView, setLoadingView, setErrorView }] = useView();

  const isMounted = useRef(false);
  const url = category ? baseUrl + category : defaultUrl;

  useEffect(() => {
    isMounted.current = true;
    const getResult = async () => {
      setLoadingView();
      setTimeout(async () => {
        await fetchResult(url)
          .then((response) => {
            if (isMounted.current) {
              setResult(response);
              setSuccessView();
            }
          })
          .catch((error) => {
            if (isMounted.current) {
              setResult();
              setErrorView(error);
            }
          });
      }, 1000);
    };

    getResult();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { result, status };
};

export default useFetchRefactored;