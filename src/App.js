import './App.css';
import CatList from './CatList';
import FavoriteList from './FavoriteList';
import { useState } from 'react';
function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <div className="App">
      <CatList favorites={favorites} setFavorites={setFavorites}/>
      <FavoriteList favorites={favorites} setFavorites={setFavorites}/>
    </div>
  );
}

export default App;
