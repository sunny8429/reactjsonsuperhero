
import { useState, useEffect } from 'react';

//import components
import CardList from './components/card-list/CardList';
import SearchBox from './components/search/Search';

//import styles
import './App.css';

function App() {

  const [searchField, setSearchField] = useState('');
  const [superheros, setSuperheros] = useState([]);
  const [filteredSuperheros, setFilterSuperheros] = useState(superheros);

  useEffect(() => {
  fetch('/superheros')
  .then((response) => response.json())
  .then((users) => setSuperheros(users));
}, []);

useEffect(() => {
  const newFilteredSuperheros = superheros.filter((superhero) => {
    return superhero.name.toLocaleLowerCase().includes(searchField);
  });

  setFilterSuperheros(newFilteredSuperheros);
}, [superheros, searchField]);

const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
};


const updateSuperhero = async (id, updsuperhero) =>{
    const response = await fetch(`/superheros/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updsuperhero),
    })
    console.log(response);
  const data = await response.json()
  console.log(data);
  setSuperheros(superheros.map((superhero) => superhero.id === id ? data : superhero));

}

  return (
    <div className="App">
      <h1 className='app-title'>SuperHero</h1>

      <div className='superhero-search-box'>
      <SearchBox     
        onChangeHandler={onSearchChange}
        placeholder='Search your superhero... '
      />
      </div>

      <CardList superheros={filteredSuperheros} updateSuperhero={updateSuperhero}/>
    </div>
  );
}

export default App;
