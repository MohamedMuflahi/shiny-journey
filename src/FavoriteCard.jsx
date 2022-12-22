function FavoriteCard({cat,handleDelete}) {
  return (
    <div onClick={()=>{
        handleDelete(cat.id)
    }}>
        <img alt="" src={cat.image} style={{width: '200px'}}/>
        <p>{cat.name}</p>
        <p>{cat.breed}</p>
        <p>{cat.score}</p>
    </div>
  )
}

export default FavoriteCard