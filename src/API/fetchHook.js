import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}
