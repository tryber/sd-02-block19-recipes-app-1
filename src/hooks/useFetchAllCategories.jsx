import { useState, useEffect } from 'react';

const useFetchAllCategories = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const values = json.meals.map((elem) => Object.values(elem));
    values.length = 5;
    values.unshift(['All']);
    setData(values);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};
export default useFetchAllCategories;
