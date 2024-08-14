import React from "react";
import GameCard from "./GameCard";
// import "../css/Favorites.css"; // Assuming you have some CSS for Favorites

function Favorites({ games =[], favorites= [], onToggleFavorite }) {
  const favoriteGames = games ? games.filter(game => favorites.includes(game.id)) : [];
console.log("The favorites", favorites)
console.log("the games: ", games) 
return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div  className="game-cards-container">
        {games.length === 0 ? (
          <p>No favorite games available</p>
        ) : (
          favoriteGames.map(game => (
            <div key={game.id} className="game-card-wrapper">
              <GameCard 
                game={game} 
                onToggleFavorite={onToggleFavorite} 
                isFavorite={true} // This is always true on Favorites page
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
