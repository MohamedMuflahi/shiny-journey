import {useState,useEffect} from 'react'
import CatCard from './CatCard'
function CatList({favorites, setFavorites}) {
  const [cats,setCats] = useState([])

  const fetchCats = async () => {
     const req = await fetch("http://localhost:3000/cats")
     const res = await req.json()
     setCats(res)
  }
  useEffect(()=>{
    fetchCats();
  },[])
  const handleClick = (cat) =>{
    setFavorites([...favorites,cat])
  }
  return (
   <div style={{display: 'flex'}}>
<h1>Cats:</h1>
   {cats.map((cat)=>{
     return(
        <CatCard key={cat.id} cat={cat} handleClick={handleClick}/>
     )
   })}
   </div>
  )
}

export default CatList