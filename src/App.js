import { useState } from "react";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Team from "./components/teamSection/teamSection";
import TextSpot from "./components/textSpot/textSpot";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [elements, setElements] = useState([
    {
      id: uuidv4(),
      name: "Normal",
      primaryColor: "#57C278'",
    },
    {
      id: uuidv4(),
      name: "Agua",
      primaryColor: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Fogo",
      primaryColor: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "Planta",
      primaryColor: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Inseto",
      primaryColor: "#D86EBF",
    },
    {
      id: uuidv4(),
      name: "Toxico",
      primaryColor: "#FF8A29",
    },
    {
      id: uuidv4(),
      name: "Eletrico",
      primaryColor: "#FEBA05",
    },
  ]);
  function alterCardColor(color, id) {
    setElements(
      elements.map((parameter) => {
        if (parameter.id === id) {
          parameter.primaryColor = color;
        }
        return parameter;
      })
    );
  }

  const [cards, setcards] = useState([]);

  const whenAdd = (newcards) => {
    setcards([...cards, newcards]);
  };

  const deleteCard = (id) => {
    setcards(cards.filter((parameter) => parameter.idPokemon !== id));
    console.log(id);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        itens={elements.map((parameter) => parameter.name)}
        newCard={(newcards) => whenAdd(newcards)}
      />
      {elements.map((parameter) => (
        <Team
          key={parameter.name}
          title={parameter.name}
          pokemon={cards.filter(
            (parameter2) => parameter2.types === parameter.name
          )}
          primaryColor={parameter.primaryColor}
          //secondaryColor={parameter.secondaryColor}
          toDelete={deleteCard}
          //elementColor={parameter.primaryColor}
          element={parameter}
          alterColor={alterCardColor}
          idPokemon={uuidv4}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
