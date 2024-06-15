import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    let favoritesObject;

    if (savedFavorites) {
      favoritesObject = JSON.parse(savedFavorites);
    } else {
      favoritesObject = {};
    }

    setFavorites(favoritesObject);
  }, []);

  const toggleFavorite = (teamId) => {
    if (teamId === 66) {
      alert('hahahahahaha, no  pick something serious..');
      return;
    }

    setFavorites((prevFavorites) => {
      let newFavorites = { ...prevFavorites };
      if (prevFavorites[teamId]) {
        newFavorites[teamId] = false;
      } else {
        newFavorites[teamId] = true;
      }

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return [favorites, toggleFavorite];
};

export default useFavorites;
