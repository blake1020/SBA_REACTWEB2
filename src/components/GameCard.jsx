import React from 'react'
import '../css/GameCard.css';
import { Link } from 'react-router-dom'

function GameCard({game, onToggleFavorite, isFavorite}) {
  return (
    <div className="game-card">
      <div className="game-card-image-container">
        <img src={game.thumbnail} alt={game.title} className="game-card-image" />
        <button 
          className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
          onClick={() => onToggleFavorite(game.id)}
        >
          {isFavorite ? '❤️' : '🤍'} {/* Heart icon or white heart */}
        </button>
      </div>
      <div className="game-card-content">
        <h3 className="game-card-title">{game.title}</h3>
        <p className="game-card-genre">{game.genre}</p>
        <Link to={`/game/${game.id}`} className="game-card-link">View Details</Link>
      </div>
    </div>
  );
}

export default GameCard