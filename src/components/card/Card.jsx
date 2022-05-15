import { useState } from "react";

//import component
import Modal from "../modal/Modal";

//import styles
import "./card.css";

const Card = ({ superhero, updateSuperhero }) => {
  const { id, name, intelligence, strength, speed, durability, power, combat } =
    superhero;

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };

  let [state, setState] = useState({ superhero: superhero });

  const updateInput = (e) => {
    setState({
      superhero: { ...state.superhero, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSuperhero(id, state.superhero);
    setModal(false);
  };

  return (
    <div className="card-container">
      {modal && (
        <Modal>
          <div className="header">
            <h2 className="title">
              Update Superhero: <span className="superhero-name">{name}</span>
            </h2>
            <div onClick={handleClose}>
              <i className="fa fa-xmark"></i>
            </div>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="grid-2">
              <label>
                <span> Intelligence: </span>
                <input
                  type="text"
                  id="intelligence"
                  name="intelligence"
                  value={state.superhero.intelligence}
                  onChange={updateInput}
                />
              </label>
              <label>
                <span> Strength: </span>
                <input
                  type="text"
                  id="strength"
                  name="strength"
                  value={state.superhero.strength}
                  onChange={updateInput}
                />
              </label>
              <label>
                <span> Speed: </span>
                <input
                  type="text"
                  id="speed"
                  name="speed"
                  value={state.superhero.speed}
                  onChange={updateInput}
                />
              </label>
              <label>
                <span> Durability: </span>
                <input
                  type="text"
                  id="durability"
                  name="durability"
                  value={state.superhero.durability}
                  onChange={updateInput}
                />
              </label>
              <label>
                <span> Power: </span>
                <input
                  type="text"
                  id="power"
                  name="power"
                  value={state.superhero.power}
                  onChange={updateInput}
                />
              </label>
              <label>
                <span> Combat: </span>
                <input
                  type="text"
                  id="combat"
                  name="combat"
                  value={state.superhero.combat}
                  onChange={updateInput}
                />
              </label>
            </div>

            <button>Submit</button>
          </form>
        </Modal>
      )}
      <div className="icon" onClick={() => setModal(true)}>
        <i className="fa fa-pen-to-square"></i>
      </div>

      <img
        alt={`superhero ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h4>Name: {name}</h4>
      <p>Power Stats</p>
      <p className="fs14">Intelligence: {intelligence}</p>
      <p className="fs14">Strength: {strength}</p>
      <p className="fs14">Speed: {speed}</p>
      <p className="fs14">Durability: {durability}</p>
      <p className="fs14">Power: {power}</p>
      <p className="fs14">Combat: {combat}</p>
    </div>
  );
};

export default Card;
