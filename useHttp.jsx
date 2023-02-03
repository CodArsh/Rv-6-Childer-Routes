import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "http://localhost:3434";
const useHttp = (request) => {
  const [httpResponse, setHttpResponse] = useState(null);
  const [httpError, setHttpError] = useState(null);
  const [loader, setLoader] = useState(true);
  const ajax = () => {
    axios(request)
      .then((res) => {
        setHttpResponse(res.data);
      })
      .catch((err) => {
        setHttpError(err.response);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    if (request) {
      ajax();
    }
  }, [request]);

  return [httpResponse, httpError, loader];
};
export default useHttp;
