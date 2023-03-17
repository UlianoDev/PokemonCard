import Pokemons from "../pokemons/pokemons";
import "./teamSection.css";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  return (
    props.pokemon.length > 0 && (
      <section
        className="teamBlock"
        style={{ backgroundColor: hexToRgba(props.primaryColor, "0.5") }}
      >
        <input
          value={props.element.primaryColor}
          type="color"
          className="input-color"
          onChange={(event) =>
            props.alterColor(event.target.value, props.element.id)
          }
        />
        <h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
        <div className="pokemons">
          {props.pokemon.map((parameter) => (
            <Pokemons
              key={parameter.name}
              cardColor={props.primaryColor}
              name={parameter.name}
              description={parameter.description}
              img={parameter.imagem}
              toDelete={props.toDelete}
              idPokemon={props.idPokemon}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
