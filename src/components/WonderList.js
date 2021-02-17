import WonderCard from "./WonderCard";

const WonderList=({ data, handleClick })=>{
    return(
        <div className="WonderList">
            {data.map(wonder=><WonderCard  handleClick1={ handleClick } key={wonder.id}{...wonder}/>)}
        </div>
    )
}
export default WonderList;