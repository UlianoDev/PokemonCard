import { useState } from "react";
import "./textSpot.css";

const TextSpot = (props) => {
  //   const onTyped = (event) => {
  //     props.whenAltered(event.target.value);
  //   };
  //const [valor, setValor] = useState("");

  const onTyped = (event) => {
    props.setter(event.target.value);
    //  console.log(props.value);
  };

  return (
    <div className="text-spot">
      <label>{props.label}</label>
      <input
        // value={props.valuee}
        onChange={onTyped}
        required={props.mandatory}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default TextSpot;
