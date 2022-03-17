import "./Pokecard.css"
function Pokecard(props){
    return(
        <div className="pokecard">
            <div className="name">{props.name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} width="200"></img>
            <div>Type: {props.type}</div>
            <div>EXP: {props.exp}</div>
            <br></br>
        </div>
    )
}


export default Pokecard