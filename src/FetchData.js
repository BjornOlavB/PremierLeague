import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api/standings';

const useFetchStandings = () => {
  const [standings, setStandings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Not able to fetch, is the server running?');
        }
        const data = await response.json();
        setStandings(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  return { standings, loading, error };
};
export default useFetchStandings;
