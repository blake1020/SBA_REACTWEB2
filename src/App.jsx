import React, { useState, useEffect } from "react";
import GameDisplay from "./components/GameDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import FavoritesPage from "./components/FavoritesPage"
import Navbar from "./app/Navbar";
import './css/App.css'

const API_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2ca71bacd5msh2d228e3fede28a7p1845bajsn3ee34c0d2d3f",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

// try {
//   const response = await fetch(API_URL, options);
//   const result = await response.text();
//   // console.log(result);
// } catch (error) {
//   console.error(error);
// }

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  
  
  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        const result = await response.json();
        setGames(result);
        console.log("Fetched data", result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getGames();
  }, []);

const toggleFavorite = (gameId) => {
  setFavorites((prevFavorites) => prevFavorites.includes(gameId) ? prevFavorites.filter(id => id !== gameId) :[...prevFavorites, gameId]
  );
};

const favoriteGames = games.filter(game => favorites.includes(game.id))

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GameDisplay games={games} onToggleFavorite={toggleFavorite} favorites={favorites}/>} />

        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} games={games} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
