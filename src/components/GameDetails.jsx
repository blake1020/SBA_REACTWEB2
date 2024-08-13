import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/GameDetails.css'

const GameDetails = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game,setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "2ca71bacd5msh2d228e3fede28a7p1845bajsn3ee34c0d2d3f",
              "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
       setGames(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!game) return <div>No game found</div>;

  return (
    <div className="game-details">
      <div className="game-details-content">
        <div className="game-details-thumbnail">
          <img src={game.thumbnail} alt={game.title} />
        </div>
        <div className="game-details-info">
          <h1>{game.title}</h1>
          <div className="details">
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p><strong>Release Date:</strong> {game.release_date}</p>
            <a href={game.play_now_url} className="play-now">Play Now</a>
          </div>
          <div className="description">
            <p>{game.description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
