import { useEffect, useState } from "react";
import { fetchStatus } from "../constants/fetchStatus";

export const useFetch = (callback) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(fetchStatus.IDLE);

  useEffect(() => {
    const fetchArticles = async () => {
      setStatus(fetchStatus.LOADING);
      try {
        const data = await callback();
        setData(data);
        setStatus(fetchStatus.SUCCESS);
      } catch (error) {
        setStatus(fetchStatus.ERROR);
      }
    };
    fetchArticles();
  }, [callback]);

  return { data, status };
};
