const WonderCard=({ image,name,location,year,handleClick1})=>{
    return(
        <div>
            <div className="container">
            <div className="image">
            <img src={image} alt="image"/>
            </div>
            <div className="wonderinfo">
            <p>{name}</p>
            <p>{location}</p>
            <p>{year}</p>
            <button className="button" onClick={()=>handleClick1(name)}>Click Me!!!</button>
            </div>
            </div>
        </div>
            
    )

}
export default WonderCard;