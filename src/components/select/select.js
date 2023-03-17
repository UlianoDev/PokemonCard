import "./select.css";

const Select = (props) => {
  //   const onTyped = (event) => {
  //     props.setter(event.target.value);
  //     console.log(props.value);
  //   };

  return (
    <div className="select">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.setter(event.target.value)}
        required={props.mandatory}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
