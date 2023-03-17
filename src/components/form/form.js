import "./form.css";
import TextSpot from "../textSpot/textSpot";
import Select from "../select/select";
import Button from "../button/button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imagem, setImagem] = useState("");
  const [types, setTypes] = useState("");
  //const [id, setId] = useState({props.id});

  const whenSaved = (event) => {
    event.preventDefault();
    props.newCard({
      name: name,
      description: description,
      imagem: imagem,
      types: types,
    });
    setName("");
    setDescription("");
    setImagem("");
    setTypes("");
  };
  return (
    <section className="form">
      <form onSubmit={whenSaved}>
        <h2>Preencha os dados para criar o card do Pokemon</h2>
        <TextSpot
          mandatory={true}
          label="Nome"
          placeholder="Digite seu name"
          value={name}
          setter={setName}
        />

        <TextSpot
          mandatory={true}
          label="Descrição"
          placeholder="Digite seu description"
          value={description}
          setter={setDescription}
        />

        <TextSpot
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          setter={setImagem}
        />

        <Select
          mandatory={true}
          label="Tipo"
          itens={props.itens}
          value={types}
          setter={setTypes}
        />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
