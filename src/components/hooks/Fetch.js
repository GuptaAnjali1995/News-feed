
import  React from 'react';

export  const useFetch = (url) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    },[url] );
    return { response, error };
  };

 