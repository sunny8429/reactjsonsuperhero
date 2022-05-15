//import components
import Card from "../card/Card";

//import styles
import "./cardlist.css";

const CardList = ({ superheros, updateSuperhero }) => {
  return (
    <div className="card-list">
      {superheros.map((superhero) => {
        return (
          <Card
            key={superhero.id}
            superhero={superhero}
            updateSuperhero={updateSuperhero}
          />
        );
        console.log(superhero);
      })}
    </div>
  );
};

export default CardList;
