import "./pokemons.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Pokemons = (props) => {
  return (
    <div className="container" id={props.idPokemon}>
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => props.toDelete(props.idPokemon)}
      />
      <div className="header" style={{ backgroundColor: props.cardColor }}>
        <img src={props.img} alt={props.name}></img>
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.description}</h5>
      </div>
    </div>
  );
};

export default Pokemons;
