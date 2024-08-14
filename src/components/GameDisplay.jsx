import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import "../css/GameDisplay.css";

function GameDisplay({ games, onToggleFavorite, favorites}) {
  // const [favorite, setFavorites] = useState([])
  // // console.log("These are the games", games);
  const gamesArray = games && Array.isArray(games.results) ? games.results : [];
  const favoriteArray = favorites || [];
  // if (gamesArray.length === 0) {
  //   return <div>No games available</div>;
  // }

  return (
    <div className="game-display">
      <h1>Free Game List</h1>
      <div className="game-cards-container">
        {games.map((gameItem) => (
          <div key={gameItem.id} className="game-card-wrapper">
            <GameCard game={gameItem} onToggleFavorite={onToggleFavorite} isFavorite={favorites.includes(gameItem.id)}/>
            <Link to={`/game/${gameItem.id}`}>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameDisplay;
