
function CatCard({cat,handleClick}) {
  return (
    <div onClick={()=>{
      handleClick(cat)
    }}>
        <img alt="" 
        src={cat.image} 
        style={{width: '200px'}}
        />
        <p>{cat.name}</p>
        <p>{cat.breed}</p>
        <p>{cat.score}</p>
    </div>
  )
}

export default CatCard