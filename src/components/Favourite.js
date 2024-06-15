import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Favorite = ({ teamId, favorites, toggleFavorite }) => {
  const isFavorite = favorites[teamId];
  let starClass = 'far fa-star';

let starStyle = {
  WebkitTextStroke: '0.2px black'
};

if (isFavorite) {
    starStyle.color = 'yellow';
    starClass = 'fas fa-star';
} else {
    starStyle.color = 'black';
    starClass = 'far fa-star';
}

  return (
    <button onClick={() => toggleFavorite(teamId)}>
      <i className={starClass}style={starStyle}></i>
    </button>
  );
};

export default Favorite;

