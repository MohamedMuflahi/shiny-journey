import FavoriteCard from "./FavoriteCard"
function FavoriteList({favorites, setFavorites}) {
  const handleDelete = (id) =>{
    setFavorites(favorites.filter((cat)=>{
      return cat.id !== id
    }))
  }
  return (
    <div style={{display: 'flex'}}>
      <h1>Favorites:</h1>
      {favorites.map((cat)=>{
        return (
          <FavoriteCard key={cat.id} cat={cat} handleDelete={handleDelete}/>
        )
      })}
    </div>
  )
}

export default FavoriteList