import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import "../css/GameDisplay.css";

function GameDisplay({ games }) {
  const [favorite, setFavorites] = useState([])
  // console.log("These are the games", games);
  const gamesArray = games && Array.isArray(games.results) ? games.results : [];
  // if (gamesArray.length === 0) {
  //   return <div>No games available</div>;
  // }

  return (
    <div className="game-display">
      <h1>Free Game List</h1>
      <div className="game-cards-container">
        {games.map((gameItem) => (
          <div key={gameItem.id} className="game-card-wrapper">
            <GameCard game={gameItem} />
            <Link to={`/game/${gameItem.id}`}>
              {/* <button className="view-details-button">View Details</button> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameDisplay;
